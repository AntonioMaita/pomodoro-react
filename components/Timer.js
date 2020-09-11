/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable react/no-multi-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/self-closing-comp */
/* eslint-disable unicorn/filename-case */
import React from "react";


class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isPomodoro: true,
            timerSecondes: 0,
            intervalId: 0,
        };
        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer() {
        const intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.onplayStopTimer(true);
        this.setState({
            intervalId,
        });
    }
    decreaseTimer() {
        switch (this.state.timerSecondes) {
            case 0:
                if (this.props.timerMinutes === 0) {
                    if (this.state.isPomodoro) {
                        this.setState({
                            isPomodoro: false,
                        });

                        this.props.ToggleInterval(this.state.isPomodoro);
                    } else {
                        this.setState({
                            isPomodoro: true,
                        });

                        this.props.ToggleInterval(this.state.isPomodoro);
                    }
                } else {
                    this.props.UpdateTimerMinute();
                    this.setState({
                        timerSecondes: 59,
                    });
                }

                break;

            default:
                this.setState(par => ({
                    timerSecondes: par.timerSecondes - 1,
                }));
                break;
        }
    }
    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.onplayStopTimer(false);
    }
    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.onplayStopTimer(false);
        this.setState({
            timerSecondes: 0,
            isPomodoro: true,
        });
    }
    render() {
        return (
            <section className={"section-timer"}>
                <h3>
                    {" "}
                    {this.state.isPomodoro === true ? "Pomodoro" : "Break"}{" "}
                </h3>
                <div className={"timer"}>
                    <p className={"minutes"}> {this.props.timerMinutes} </p>
                    <p className={"separateur"}>{":"}</p>
                    <p className={"secondes"}>
                        {this.state.timerSecondes === 0
                            ? "00"
                            : this.state.timerSecondes < 10
                            ? `0${this.state.timerSecondes}`
                            : this.state.timerSecondes}
                    </p>
                </div>
                <div className={"settings-timer"}>
                    <button
                        className={"play-timer"}
                        type={"button"}
                        onClick={() => this.playTimer()}>
                        <svg
                            xmlns={"http://www.w3.org/2000/svg"}
                            viewBox={"0 0 20 20"}>
                            <path d={"M4 4l12 6-12 6z"} />
                        </svg>
                    </button>
                    <button type={"button"} onClick={() => this.stopTimer()}>
                        <svg
                            xmlns={"http://www.w3.org/2000/svg"}
                            viewBox={"0 0 20 20"}>
                            <path d={"M5 4h3v12H5V4zm7 0h3v12h-3V4z"} />
                        </svg>
                    </button>
                    <button type={"button"} onClick={() => this.resetTimer()}>
                        <svg
                            xmlns={"http://www.w3.org/2000/svg"}
                            viewBox={"0 0 20 20"}>
                            <path
                                d={
                                    "M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </section>
        );
    }
}

export default Timer;
