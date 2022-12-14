import "./App.css";
import NokiaBackground from "./images/nokia/nokia_background_shadow.svg";
import NumberKeyPad from "./components/keyboard/keyboard_component";
import { Grid } from "@mui/material";
function App() {
  return (
    <div className="appContent">
      <div
        style={{
          backgroundColor: "black",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          gridTemplateAreas: "overlap",
        }}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ zIndex: "1", gridArea: "overlap" }}
        >
          <img
            alt=""
            src={NokiaBackground}
            style={{
              height: "700px",
              width: "100%",
              zIndex: "1",
              gridArea: "overlap",
            }}
          />
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ zIndex: "1", gridArea: "overlap" }}
        >
          <NumberKeyPad style={{ zIndex: "1", gridArea: "overlap" }} />
        </Grid>
      </div>
    </div>
  );
}

export default App;
