import { Grid, Typography, Button } from "@material-ui/core"
import React, { useState, useEffect, useRef } from 'react';
import convertWords from "../../api/convertWords"
import UpDown_btn from "../../images/nokia/up_down_btn.svg"
import Up_icon from "../../images/nokia/up_icon.svg"
import Down_icon from "../../images/nokia/down_icon.svg"
import Call_btn from "../../images/nokia/call_btn.svg"
import "./screen_componet.css"
import "../../fonts/nokiafc22.ttf"

export default function ScreenComponent({ text }) {
    const [message, setMessage] = useState("");


    useEffect(() => {
        console.log("text", text)
        setMessage(text)
    }, [text])



    return (
        <div className="screen" >
            <div className="screenDiv" >
                <Typography className="screenText" >{message}</Typography>
            </div>

            <Grid className="callBtnContainer" container justify="center" alignItems="center">
                <Button size="small" ><img alt="" src={Call_btn} /> </Button>
            </Grid>

            <Grid className="upDownBtnContainer" container justify="center" alignItems="center">
                <img className="upDownBtnImg" alt="" src={UpDown_btn} />
                <Button className="upBtn"  size="small" ><img alt="" src={Up_icon} /></Button>
                <Button className="downBtn"  size="small" ><img alt="" src={Down_icon} /></Button>
            </Grid>
        </div>
    )
}