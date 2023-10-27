import {useState} from "react";
import styles from "./TimeGenerator.module.css"
import close from "../../assets/x-lg.svg"
import bell from "../../assets/bell.svg"

export default function TimeGenerator() {

    const calTime = (hour: number, min: number) => {
        const date = new Date()
        return new Date((date.getTime() + hour * 60 * 60000 + min * 60000))
    }

    const [state, setState] = useState({
        time: new Date(),
        duration: [1, 15, 30, 45, 60],
        displayInput: false,
        selectedDuration: 15,
        increment: 0
    })


    const updateTime = calTime(Math.floor(state.selectedDuration / 60), Math.floor(state.selectedDuration % 60))

    return (
        <>
            <div className={styles.timer}>
                <button onClick={() => setState({...state, increment: -state.selectedDuration + state.increment})}>-
                </button>
                <button className={styles.timerDisplay}
                >{calTime(0, state.increment).getHours()} : {calTime(0, state.increment).getMinutes()}
                    {state.selectedDuration > 1 && " - " + updateTime.getHours() + ": " + updateTime.getMinutes()}
                </button>
                <button onClick={() => setState({...state, increment: state.increment + state.selectedDuration})}>+
                </button>
            </div>
            <div className={styles.container}>
                <h5>How long?</h5>
                <button onClick={() => {
                    setState({...state, displayInput: !state.displayInput})
                }} className={"btn btn-light"}>more?
                </button>
                {state.displayInput &&
                    <div className={styles.inputDuration}>
                        <div>
                            <input autoFocus={true} type={"number"} min={0} max={11}
                                   className={styles.addDuration}
                                   name={"hours"}
                                   id={"hours"}
                            />
                            <label htmlFor={"hours"}>: hours</label>
                        </div>
                        <div>
                            <input className={styles.addDuration} name={"minutes"} type={"number"}
                                   id={"minutes"}
                                   min={1} max={59}/>
                            <label htmlFor={"minutes"}>: minutes</label>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.duration}>
                {state.duration.map((item, index) => {
                    return <button key={index}
                                   onClick={() => setState({...state, time: new Date(), selectedDuration: item})}
                                   className={styles.durationButton}>{item}</button>
                })}
            </div>
            <div style={{margin: "20px 0"}}>
                <h5>What Color?</h5>
            </div>
            <div className={styles.color}>
                {["#ee82ee", "#3cb371", "#6a5acd", "#ffffff",].map((item, index) => {
                    return <button className={styles.colorButton} key={index}>
                        <input className={styles.colorInput} type={"color"} value={item}
                               disabled={index === 5}/>
                    </button>
                })}
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"}/>
                </button>
            </div>
            <div>
                <h5 style={{margin: "20px 0"}}>How often?</h5>
                <div className={styles.color}>
                    {["Once", "Daily", "Weekly", "Monthly"].map((item) => {
                        return (
                            <button className={styles.durationButton} key={item}>{item}</button>
                        )
                    })}
                </div>
            </div>
            <div>
                <h5 style={{margin: "20px 0 5px 0"}}>Need Alerts?</h5>
                <div className={styles.alerts}>
                    <h6>
                        <img src={bell} alt={"bell"}/>
                        Alert at Start of the Task</h6>
                    <button className={"btn btn-light"}>
                        <img className={styles.alertClose} src={close} alt={"close"}/>
                    </button>
                </div>
                <div className={styles.alerts}>
                    <h6>
                        <img src={bell} alt={"bell"}/>
                        Alert at End of the Task</h6>
                    <button className={"btn btn-light"}>
                        <img className={styles.alertClose} src={close} alt={"close"}/>
                    </button>

                </div>
                <div>
                    <button className={"btn btn-light"} style={{width: "100%"}}>
                        Add Alerts
                    </button>

                </div>
            </div>
            <div>
                <h5 style={{margin: "20px 0"}}>Any Details?</h5>
                <textarea placeholder={"Add notes, meeting links, or phone numbers"}
                          className={styles.textArea}></textarea>
            </div>

            <button className={styles.createTask}><h5>Create Task</h5></button>
        </>
    )
}
