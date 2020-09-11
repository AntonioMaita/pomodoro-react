/* eslint-disable react/button-has-type */
import React from "react";

export default function PomodoroTime(props) {
    function decreaseCounter() {
        if (props.pomodoro === 1) {
            return;
        }
        props.decreaseCounter();
    }
    function increaseCounter() {
        if (props.pomodoro === 60) {
            return;
        }
        props.increaseCounter();
    }

    return (
        <section className={"section-pomodoro-time"}>
            <h2>{"Pomodoro time"}</h2>
            <div className={"pomodoro-time"}>
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
                <p> {props.pomodoro} </p>
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
