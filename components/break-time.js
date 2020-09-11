/* eslint-disable react/button-has-type */
import React from "react";

function BreakTime(props) {
    function decreaseCounter() {
        if (props.break === 1) {
            return;
        }
        props.decreaseCounter();
    }
    function increaseCounter() {
        if (props.break === 60) {
            return;
        }
        props.increaseCounter();
    }
    return (
        <section className={"section-break-time"}>
            <h2>{"Break time Minutes"}</h2>
            <div className={"break-time"}>
                <button
                    type={"button"}
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 20 20"}>
                        <path d={"M7 10V2h6v8h5l-8 8-8-8h5z"} />
                    </svg>
                </button>
                <p> {props.break} </p>
                <button
                    type={"button"}
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>
                    <svg
                        xmlns={"http://www.w3.org/2000/svg"}
                        viewBox={"0 0 20 20"}>
                        <path d={"M7 10v8h6v-8h5l-8-8-8 8h5z"} />
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default BreakTime;
