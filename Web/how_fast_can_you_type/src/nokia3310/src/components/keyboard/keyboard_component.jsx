import Key_0 from "../../images/nokia/num_keys/0_btn.svg";
import Key_1 from "../../images/nokia/num_keys/1_btn.svg";
import Key_2 from "../../images/nokia/num_keys/2_btn.svg";
import Key_3 from "../../images/nokia/num_keys/3_btn.svg";
import Key_4 from "../../images/nokia/num_keys/4_btn.svg";
import Key_5 from "../../images/nokia/num_keys/5_btn.svg";
import Key_6 from "../../images/nokia/num_keys/6_btn.svg";
import Key_7 from "../../images/nokia/num_keys/7_btn.svg";
import Key_8 from "../../images/nokia/num_keys/8_btn.svg";
import Key_9 from "../../images/nokia/num_keys/9_btn.svg";
import Hash_key from "../../images/nokia/hash_btn.svg";
import Star_btn from "../../images/nokia/star_btn.svg";
import { Button, Grid } from "@mui/material";
import React from "react";
import ScreenComponent from "../screen/screen_componet";
import Action_btn from "../../images/nokia/nokia_actionBtn.svg";
import "./keyboard_component.css";

const numberValue = ["2", "3", "4", "5", "6", "7", "8", "9", " "];

export default function NumberKeyPad() {
  const [numberCapture, setNumberCapture] = React.useState("");
  const captureNumbers = (value) => {
    if (numberCapture.includes(" ")) setNumberCapture(value);
    else setNumberCapture(numberCapture + value);
  };

  const addSpace = () => setNumberCapture(" ");

  return (
    <div>
      <div>
        <ScreenComponent text={numberCapture} />
      </div>
      <div className="phoneKeysDiv">
        <Grid
          className="actionButton"
          container
          justify="center"
          alignItems="center"
        >
          <img alt="" src={Action_btn} style={{}} />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button size="small">
            <img alt="" src={Key_1} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[0]);
            }}
            size="small"
          >
            <img alt="" src={Key_2} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[1]);
            }}
            size="small"
          >
            <img alt="" src={Key_3} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            onClick={() => {
              captureNumbers(numberValue[2]);
            }}
            size="small"
          >
            <img alt="" src={Key_4} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[3]);
            }}
            size="small"
          >
            <img alt="" src={Key_5} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[4]);
            }}
            size="small"
          >
            <img alt="" src={Key_6} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            onClick={() => {
              captureNumbers(numberValue[5]);
            }}
            size="small"
          >
            <img alt="" src={Key_7} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[6]);
            }}
            size="small"
          >
            <img alt="" src={Key_8} />
          </Button>
          <Button
            onClick={() => {
              captureNumbers(numberValue[7]);
            }}
            size="small"
          >
            <img alt="" src={Key_9} />
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button size="small">
            <img alt="" src={Star_btn} />
          </Button>
          <Button onClick={addSpace} size="small">
            <img alt="" src={Key_0} />
          </Button>
          <Button size="small">
            <img alt="" src={Hash_key} />
          </Button>
        </Grid>
      </div>
    </div>
  );
}
