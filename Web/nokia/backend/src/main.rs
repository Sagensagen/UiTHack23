//! Backend providing endpoints for nokia CTF challange.
//!
//! # Endpoints
//!
//! ## GET /message/new
//!
//! Initialize a new message. Returns a message id as json.
//! ```json
//! { "message_id": "<some-id>" }
//! ```
//!
//! ## GET /message/:id
//!
//! Fetch message in its current form.
//!
//! ```json
//! { "message": "<message>" }
//! ```
//!
//! ## POST /message/:id/send
//!
//! Send the message in its current state.
//! Returns the flag as raw text if the message is correct.
//!
//! ## POST /button/:btn
//!
//! Press a button on the nokia phone.
//! A payload with a valid message id must be provided
//!
//! ```json
//! { "message_id": "<some-id>" }
//! ```
//!

mod button;

use axum::{
    extract::{DefaultBodyLimit, Path, State},
    http::{Method, StatusCode},
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use button::Button;
use serde::Deserialize;
use serde_json::json;
use std::{collections::HashMap, sync::Arc, time::Duration, time::Instant};
use tokio::sync::RwLock;
use tower_http::LatencyUnit;
use tower_http::{
    cors::{self, CorsLayer},
    trace::{DefaultOnRequest, DefaultOnResponse, TraceLayer},
};
use tracing::Level;
use tracing_subscriber::{prelude::*, EnvFilter};
use uuid::Uuid;

type Db = Arc<RwLock<HashMap<Uuid, RwLock<Msg>>>>;

const WAIT_KEYPRESS: Duration = Duration::from_millis(400);
const WAIT_DELETE_MESSAGE: Duration = Duration::from_secs(10);

#[tokio::main]
async fn main() {
    tracing_subscriber::registry()
        .with(EnvFilter::from_default_env())
        .with(tracing_subscriber::fmt::layer().json())
        .init();

    let db: Db = Arc::new(RwLock::new(HashMap::new()));
    let app = Router::new()
        .route("/message/new", get(message_new))
        .route("/message/:id", get(message_get))
        .route("/message/:id/send", post(message_send))
        .route("/button/:btn", post(button_press))
        .with_state(db)
        .layer(DefaultBodyLimit::max(1024))
        .layer(
            CorsLayer::new()
                .allow_origin(cors::Any)
                .allow_methods([Method::GET, Method::POST])
                .allow_headers(cors::Any),
        )
        .layer(
            TraceLayer::new_for_http()
                .on_request(DefaultOnRequest::new().level(Level::INFO))
                .on_response(
                    DefaultOnResponse::new()
                        .level(Level::INFO)
                        .latency_unit(LatencyUnit::Micros),
                ),
        );

    axum::Server::bind(&"0.0.0.0:8080".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn message_new(State(db): State<Db>) -> Result<impl IntoResponse, StatusCode> {
    let uuid = Uuid::new_v4();
    db.write().await.insert(uuid, RwLock::new(Msg::new()));
    tokio::spawn(async move {
        tokio::time::sleep(WAIT_DELETE_MESSAGE).await;
        db.clone().write().await.remove(&uuid.clone());
    });
    Ok(Json(json!({ "message_id": uuid })))
}

async fn message_get(
    State(db): State<Db>,
    Path(id): Path<Uuid>,
) -> Result<impl IntoResponse, (StatusCode, String)> {
    let db = db.read().await;
    let mut msg = db
        .get(&id)
        .ok_or((
            StatusCode::NOT_FOUND,
            format!("message id \"{}\" not found", id),
        ))?
        .write()
        .await;

    if msg.last_keypress.elapsed() > WAIT_KEYPRESS {
        msg.confirm_key();
    }

    Ok(Json(json!({"message": msg.data})))
}

async fn message_send(
    State(db): State<Db>,
    Path(id): Path<Uuid>,
) -> Result<impl IntoResponse, (StatusCode, String)> {
    let db = db.read().await;
    let mut msg = db
        .get(&id)
        .ok_or((
            StatusCode::NOT_FOUND,
            format!("message id \"{}\" not found", id),
        ))?
        .write()
        .await;

    if msg.last_keypress.elapsed() > WAIT_KEYPRESS {
        msg.confirm_key();
    }

    if msg.data == "uithack23 flag" {
        Ok((StatusCode::OK, "UiTHack23{if_you_ever_feel_useless,remember_someone_made_a_protective_cover_for_Nokia3310}".to_string()))
    } else {
        Err((
            StatusCode::BAD_REQUEST,
            format!("invalid message \"{}\"", msg.data),
        ))
    }
}

async fn button_press(
    State(db): State<Db>,
    Path(btn_name): Path<char>,
    Json(msg_id): Json<MsgId>,
) -> Result<impl IntoResponse, (StatusCode, String)> {
    let id = msg_id.message_id;
    let db = db.read().await;
    let mut msg = db
        .get(&id)
        .ok_or((
            StatusCode::NOT_FOUND,
            format!("message id \"{}\" not found", id),
        ))?
        .write()
        .await;

    if !msg.cmp_btn(btn_name) || msg.last_keypress.elapsed() > WAIT_KEYPRESS {
        msg.confirm_key();
        msg.button = Some(Button::new(btn_name)?);
    } else if let Some(btn) = &mut msg.button {
        btn.advance();
    } else {
        msg.button = Some(Button::new(btn_name)?);
    }

    msg.last_keypress = Instant::now();
    Ok(StatusCode::OK)
}

#[derive(Deserialize)]
struct MsgId {
    message_id: Uuid,
}

struct Msg {
    data: String,
    button: Option<Button>,
    last_keypress: Instant,
}

impl Msg {
    fn new() -> Self {
        Self {
            data: String::new(),
            button: None,
            last_keypress: Instant::now(),
        }
    }

    fn confirm_key(&mut self) {
        if let Some(c) = self.button.as_ref().map(|btn| btn.current()) {
            self.data.push(c)
        }
        self.button = None;
    }

    fn cmp_btn(&self, btn_name: char) -> bool {
        match &self.button {
            Some(b) => *b == btn_name,
            None => false,
        }
    }
}
