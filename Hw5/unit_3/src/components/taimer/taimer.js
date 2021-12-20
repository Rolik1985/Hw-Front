import React from "react";
import './taimer.css'

function Taimer ({onStart, onStop, onClear, msecond, second, minuts}){
    return(
        <>
            <div className ="content">
                <h3>Taimer</h3>
                <div className ="display">
                    <input className="stopwatch" size="10" value={minuts + ":" + second + ":" + msecond}/>
                </div>
                <div className ="btn-bloc">
                    <button className ="btn btn-start" onClick = {(event)=>{onStart()}}>Start</button>
                    <button className ="btn btn-stop"  onClick = {(event)=>{onStop()}}>Stop</button>
                    <button className ="btn btn-reset" onClick = {(event)=>{onClear()}}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Taimer

