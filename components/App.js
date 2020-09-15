/* eslint-disable unicorn/filename-case */
import React from "react";
import Timer from "./Timer";
import PomodoroTime from "./pomodoro-time";
import BreakTime from "./break-time";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            pomodoroLength: 25,
            timerMinutes: 25,
            isPlay: false,
        };

        this.upBreakTime = this.upBreakTime.bind(this);
        this.downBreakTime = this.downBreakTime.bind(this);

        this.upPomodoroTime = this.upPomodoroTime.bind(this);
        this.downPomodoroTime = this.downPomodoroTime.bind(this);

        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
        this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    }
    upBreakTime() {
        this.setState(par => ({
            breakLength: par.breakLength + 1,
        }));
    }
    downBreakTime() {
        this.setState(par => ({
            breakLength: par.breakLength - 1,
        }));
    }
    upPomodoroTime() {
        this.setState(par => ({
            pomodoroLength: par.pomodoroLength + 1,
            timerMinutes: par.pomodoroLength + 1,
        }));
    }
    downPomodoroTime() {
        this.setState(par => ({
            pomodoroLength: par.pomodoroLength - 1,
            timerMinutes: par.pomodoroLength - 1,
        }));
    }
    onUpdateTimerMinute() {
        this.setState(par => ({
            timerMinutes: par.timerMinutes - 1,
        }));
    }
    onToggleInterval(isPomodoro) {
        if (isPomodoro) {
            this.setState(previousState => ({
                timerMinutes: previousState.pomodoroLength,
            }));
        } else {
            this.setState(previousState => ({
                timerMinutes: previousState.breakLength,
            }));
        }
    }
    onResetTimer() {
        this.setState(previousState => ({
            timerMinutes: previousState.pomodoroLength,
        }));
    }
    onPlayStopTimer(isPlay) {
        this.setState({
            isPlay,
        });
    }

    render() {
        return (
            <div>
                <main>
                    <div className={"section-settings"}>
                        <BreakTime
                            isPlay={this.state.isPlay}
                            break={this.state.breakLength}
                            increaseCounter={this.upBreakTime}
                            decreaseCounter={this.downBreakTime}
                        />

                        <PomodoroTime
                            isPlay={this.state.isPlay}
                            pomodoro={this.state.pomodoroLength}
                            increaseCounter={this.upPomodoroTime}
                            decreaseCounter={this.downPomodoroTime}
                        />
                    </div>
                    <div>
                        <Timer
                            timerMinutes={this.state.timerMinutes}
                            breakLength={this.state.breakLength}
                            UpdateTimerMinute={this.onUpdateTimerMinute}
                            ToggleInterval={this.onToggleInterval}
                            resetTimer={this.onResetTimer}
                            onplayStopTimer={this.onPlayStopTimer}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
