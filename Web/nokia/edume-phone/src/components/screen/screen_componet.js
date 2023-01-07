import { Grid, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import UpDown_btn from "../../images/nokia/up_down_btn.svg";
import Up_icon from "../../images/nokia/up_icon.svg";
import Down_icon from "../../images/nokia/down_icon.svg";
import Call_btn from "../../images/nokia/call_btn.svg";
import "./screen_componet.css";
import "../../fonts/nokiafc22.ttf";
import Signal from "../../images/nokia/signal.png";
import Snake from "../snake/Snake";
export default function ScreenComponent({ text, sendMsg, msgId, errorMsg }) {
  const [message, setMessage] = useState("");
  const [docs, setDocs] = useState(0);

  const handleDocs = (bool) => {
    if (bool && docs < 2) {
      setDocs(docs + 1);
    } else if (!bool && docs > 0) {
      setDocs(docs - 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    setMessage(text);
  }, [text, docs]);

  return (
    <div className="screen">
      <div className="screenDiv">
        {docs == 2 && (
          <Snake
            color1="#248ec2"
            color2="#1d355e"
            backgroundColor="transparent"
          />
        )}
        {docs == 1 && (
          <Typography className="">
            <br />

            <Typography variant="h5">Nokia 3310</Typography>
            <br />
            <br />

            <Typography variant="h6">
              Instructions for sending messages
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Press call button to initiate a ned message
                </Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body2">Enter the message</Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body2">
                  Press call button to send the message
                </Typography>
              </li>
            </ul>
            <Typography variant="h6">In case of emergency</Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Throw the phone in self defence
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Stab the threat with the phone
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Hold the phone over your head indicating it will detonate a
                  bomb, when actually it is a decoy. This will stun the threat
                  making them withdraw
                </Typography>
              </li>
            </ul>
            <Typography variant="h6">
              In case of modern social events
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">
                  Stare at the phone in silence
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Touch and swipe the screen back and forth to blend in to the
                  crowd
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  Only look up to navigate, and do not get eye contact with
                  anyone
                </Typography>
              </li>
            </ul>
          </Typography>
        )}

        {docs == 0 && (
          <div>
            {msgId && <img alt="" src={Signal} width={10} />}
            <Typography className="screenText">{message}</Typography>
            {errorMsg && (
              <Typography className="errorText">{errorMsg}</Typography>
            )}
          </div>
        )}
      </div>

      <Grid
        className="callBtnContainer"
        container
        justify="center"
        alignItems="center"
      >
        <Button size="small" onClick={() => sendMsg()}>
          <img alt="" src={Call_btn} />{" "}
        </Button>
      </Grid>

      <Grid
        className="upDownBtnContainer"
        container
        justify="center"
        alignItems="center"
      >
        <img className="upDownBtnImg" alt="" src={UpDown_btn} />
        <Button
          className="upBtn"
          size="small"
          onClick={() => {
            handleDocs(true);
          }}
        >
          <img alt="" src={Up_icon} />
        </Button>
        <Button
          className="downBtn"
          size="small"
          onClick={() => {
            handleDocs(false);
          }}
        >
          <img alt="" src={Down_icon} />
        </Button>
      </Grid>
    </div>
  );
}
