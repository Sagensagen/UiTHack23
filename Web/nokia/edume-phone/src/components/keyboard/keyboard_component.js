import Key_0 from "../../images/nokia/num_keys/0_btn.svg"
import Key_1 from "../../images/nokia/num_keys/1_btn.svg"
import Key_2 from "../../images/nokia/num_keys/2_btn.svg"
import Key_3 from "../../images/nokia/num_keys/3_btn.svg"
import Key_4 from "../../images/nokia/num_keys/4_btn.svg"
import Key_5 from "../../images/nokia/num_keys/5_btn.svg"
import Key_6 from "../../images/nokia/num_keys/6_btn.svg"
import Key_7 from "../../images/nokia/num_keys/7_btn.svg"
import Key_8 from "../../images/nokia/num_keys/8_btn.svg"
import Key_9 from "../../images/nokia/num_keys/9_btn.svg"
import Hash_key from "../../images/nokia/hash_btn.svg"
import Star_btn from "../../images/nokia/star_btn.svg"
import { Button, Grid } from "@material-ui/core"
import React from 'react';
import ScreenComponent from "../screen/screen_componet"
import Action_btn from "../../images/nokia/nokia_actionBtn.svg"
import "./keyboard_component.css"
import { useEffect } from "react"

const one = ["1"];
const two = ["2","A", "B", "C"];
const three = ["3","D", "E", "F"];
const four = ["4","G", "H", "I"];
const five = ["5","J", "K", "L"];
const six = ["6","M", "N", "O"];
const seven = ["7","P", "Q", "R", "S"];
const eight = ["8","T", "U", "V"];
const nine = ["9","W", "X", "Y", "Z"];
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
    const [msgId, setMsgId] = React.useState(null)
    const [currentchar, setCurrentChar] = React.useState(null)
    const [btnCounter, setBtnCounter] = React.useState(0)
    const [currentActiveBtn, setCurrentActivebtn] = React.useState(null)
    const [numberCapture, setNumberCapture] = React.useState("");
    // const timer ()=>{
        //  wait 2 sec
        // setNumberCapture(numberCapture + currentchar)

    const getNewMsgId = async () => {
        fetch("http://localhost:8001/message/new")
            .then(response => response.json())
            .then(data => {console.log("data", data); setMsgId(data.id)})
    }


    const validateBtn = (btnVal) => {
       
        if (currentActiveBtn === null) {
            const char = btnVal[btnCounter%(btnVal.length)]
            const count = btnCounter+1
            setCurrentActivebtn(btnVal)
            setBtnCounter(count)
            setNumberCapture(char)
        }
        else if (currentActiveBtn === btnVal) {
            const char = btnVal[btnCounter%(btnVal.length)]
            const count = btnCounter+1
            setBtnCounter(count)
            const str = numberCapture.slice(0, -1) + char
            setNumberCapture(str)
        }
        else {
            if (numberCapture === ""){
                setNumberCapture(currentActiveBtn[btnCounter%(currentActiveBtn.length)])
            }
            else {
                const str = numberCapture + currentActiveBtn[btnCounter%(currentActiveBtn.length)]
                setNumberCapture(str)
            }

            setBtnCounter(0)
            setCurrentActivebtn(btnVal)
            const str = numberCapture + btnVal[0]
            setNumberCapture(str)
        }
   
    }

    
    const clickBtn = (btnVal) => {
        if (msgId === null) {
           getNewMsgId()
           .then(
                validateBtn(btnVal)
            // Update active button
            // If acive button != input btn set current active char and set new active btn. 
           )
            }
        else {
            validateBtn(btnVal)
        }

       
    }
    




  



    // Link to setinterval with reset
    // https://stackoverflow.com/questions/56952038/how-to-reset-setinterval-function-using-react-hooks

    useEffect (() => {
    }, [numberCapture])

    return (
        <div>
            <div>
                <ScreenComponent text={numberCapture} />
            </div>
            <div className="phoneKeysDiv" >
                <Grid className="actionButton" container justify="center" alignItems="center" >
                    <img alt="" src={Action_btn} style={{}} />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={()=> {clickBtn(one)}} size="small"><img alt="" src={Key_1} /></Button>
                    <Button onClick={() => { clickBtn(two) }} size="small"><img alt="" src={Key_2} /></Button>
                    <Button onClick={() => { clickBtn(three)}} size="small"><img alt="" src={Key_3} /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={() => { clickBtn(four) }} size="small"><img alt="" src={Key_4} /></Button>
                    <Button onClick={() => { clickBtn(five) }} size="small"><img alt="" src={Key_5} /></Button>
                    <Button onClick={() => { clickBtn(six) }} size="small"><img alt="" src={Key_6} /></Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={() => { clickBtn(seven) }} size="small"><img alt="" src={Key_7} /></Button>
                    <Button onClick={() => { clickBtn(eight) }} size="small"><img alt="" src={Key_8} /></Button>
                    <Button onClick={() => { clickBtn(nine) }} size="small"><img alt="" src={Key_9} /></Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Button onClick={()=>clickBtn(star)} size="small"><img alt="" src={Star_btn} /></Button>
                    <Button onClick={()=>clickBtn(zero)} size="small"><img alt="" src={Key_0} /></Button>
                    <Button onClick={()=>clickBtn(hash)} size="small"><img alt="" src={Hash_key} /></Button>
                </Grid>
            </div >
        </div>
    )
}