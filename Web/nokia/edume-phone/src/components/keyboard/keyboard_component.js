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
import { Button, Grid } from "@material-ui/core";
import React from "react";
import ScreenComponent from "../screen/screen_componet";
import Action_btn from "../../images/nokia/nokia_actionBtn.svg";
import "./keyboard_component.css";
import { useEffect, useState, useRef } from "react";

const URL = "http://motherload.td.uit.no:8001/";
const one = ["1"];
const two = ["2", "A", "B", "C"];
const three = ["3", "D", "E", "F"];
const four = ["4", "G", "H", "I"];
const five = ["5", "J", "K", "L"];
const six = ["6", "M", "N", "O"];
const seven = ["7", "P", "Q", "R", "S"];
const eight = ["8", "T", "U", "V"];
const nine = ["9", "W", "X", "Y", "Z"];
const star = ["*", "+"];
const zero = ["0", " "];
const hash = ["#"];

//1. Get msgId from blue btn and setMsgId(id)
//2. start typing typing numbers
//      2.1. start timer every time a new character is typed
//      2.2. if timer reaches >=2sec append current character
//      2.3  current character is updated if pressed again within the time interval and respons is ok
//      2.4  if response !OK 404 then and setMsgId(null) and delete message and set timer invalid

export default function NumberKeyPad() {
  const [msgId, setMsgId] = React.useState(null);
  const [btnCounter, setBtnCounter] = React.useState(0);
  const [currentActiveBtn, setCurrentActivebtn] = React.useState(null);
  const [message, setMessage] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState(-1);
  const [toggleChar, setToggleChar] = React.useState("");

  const appendChar = (char) => {
    const str = message + char;
    setMessage(str);
  };

  const createTimeout = (btnVal) => {
    const timeoutId = setTimeout(() => {
      setBtnCounter(0);

      setCurrentActivebtn(null);
    }, 2000);
    setTimeoutId(timeoutId);
  };

  const resetTimeout = (btnVal) => {
    console.log("reset timer");

    clearTimeout(timeoutId);
    createTimeout(btnVal);
  };

  const getNewMsgId = async () => {
    const Msgresponse = await fetch("http://motherload.td.org.uit.no:8001/message/new")
    console.log(Msgresponse)
    const json = await Msgresponse.json();
    const BtnResponse = await fetch("http://motherload.td.org.uit.no:8001/button/2",{method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({ message_id: json.message_id})})
    setMsgId(Msgresponse.message_id)
    console.log(json.message_id)
    console.log("test",JSON.stringify({ message_id: json.message_id}))
    console.log(BtnResponse)


    // .then((response) => response.json())
      // .then((data) => {
      //   console.log("ID", data.message_id);
      //   sendBtnVal("2", data.message_id);
      //   setMsgId(data.message_id);
      // });
      // const json = await response;
      // console.log(json)
      // setMsgId(json.message_id)
      // sendBtnVal("2", json.message_id);
  };

  // const sendBtnVal = async (btnId, id) => {
  //   console.log("insideBtn", id);
  //   const url = URL+"button/2";
  //   const data = { message_id: msgId };
  //   console.log(data)
  //   const response = await fetch(url, {
  //     mode: "no-cors",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   console.log(response.status)
  // };

  const validateBtn = (btnVal) => {
    if (currentActiveBtn === null) {
      console.log("currentActiveBtn === null");
      const char = btnVal[btnCounter % btnVal.length];
      const count = btnCounter + 1;
      setCurrentActivebtn(btnVal);
      setBtnCounter(count);
      appendChar(char);
    } else if (
      //
      currentActiveBtn === btnVal
    ) {
      const char = btnVal[btnCounter % btnVal.length];
      const count = btnCounter + 1;
      setBtnCounter(count);
      const str = message.slice(0, -1) + char;
      setMessage(str);
      //
    } else {
      if (message === "") {
        setMessage(btnVal[btnCounter % btnVal.length]);
      } else {
        clearTimeout(timeoutId);
        const str = message + btnVal[btnCounter % btnVal.length];
        setMessage(str);
      }

      setBtnCounter(1);
      setCurrentActivebtn(btnVal);
      const str = message + btnVal[0];
      setMessage(str);
    }
  };

  const clickBtn = (btnVal) => {
    resetTimeout(btnVal);

    if (msgId === null) {
      getNewMsgId()
      validateBtn(btnVal)
      // sendBtnVal("2");
    } else {
      validateBtn(btnVal);
      // sendBtnVal("2", 2);
    }
  };

  useEffect(() => {}, [message]);

  return (
    <div>
      <div>
        <ScreenComponent text={message} />
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
          <Button
            onClick={() => {
              clickBtn(one);
            }}
            size="small"
          >
            <img alt="" src={Key_1} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(two);
            }}
            size="small"
          >
            <img alt="" src={Key_2} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(three);
            }}
            size="small"
          >
            <img alt="" src={Key_3} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            onClick={() => {
              clickBtn(four);
            }}
            size="small"
          >
            <img alt="" src={Key_4} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(five);
            }}
            size="small"
          >
            <img alt="" src={Key_5} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(six);
            }}
            size="small"
          >
            <img alt="" src={Key_6} />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button
            onClick={() => {
              clickBtn(seven);
            }}
            size="small"
          >
            <img alt="" src={Key_7} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(eight);
            }}
            size="small"
          >
            <img alt="" src={Key_8} />
          </Button>
          <Button
            onClick={() => {
              clickBtn(nine);
            }}
            size="small"
          >
            <img alt="" src={Key_9} />
          </Button>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Button onClick={() => clickBtn(star)} size="small">
            <img alt="" src={Star_btn} />
          </Button>
          <Button onClick={() => clickBtn(zero)} size="small">
            <img alt="" src={Key_0} />
          </Button>
          <Button onClick={() => clickBtn(hash)} size="small">
            <img alt="" src={Hash_key} />
          </Button>
        </Grid>
      </div>
    </div>
  );
}
