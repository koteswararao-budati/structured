import styles from "./TimeGenerator.module.css";
import {useContext, useState} from "react";
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";
import {SCHEDULE_FORM_CONSTANTS} from "../../Constants/CONSTANTS.ts";

export default function Duration() {
    const {dispatchScheduleForm} = useContext(ScheduleFormContextApi)
    const [state, setState] = useState(
        {
            displayInput: false,
            duration: [1, 15, 30, 45, 60],
            selectedDuration: 15,
            inputDuration: {hour: 1, min: 15}
        }
    )

    const updateInputDuration = (hour: number, min: number) => {
        console.log(`Pre hour: ${hour}, min: ${min}`)
        hour = hour > 12 ? 11 : hour < 0 ? 0 : hour
        min = min > 60 ? 59 : hour < 0 ? 1 : min
        console.log(`Post hour: ${hour}, min: ${min}`)
        setState(prevState => ({
            ...prevState, inputDuration: {
                hour: hour,
                min: min
            }
        }))
        updateState(hour * 60 + min)
    }

    const updateState = (num: number = 0) => {
        setState(prevState => ({...prevState, selectedDuration: num}))
        if (dispatchScheduleForm) {
            dispatchScheduleForm({
                type: SCHEDULE_FORM_CONSTANTS.duration,
                payload: num
            })
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h5>How long?</h5>
                <button onClick={() => {
                    setState({...state, displayInput: !state.displayInput})
                }} className={"btn btn-light"}>more?
                </button>
                {state.displayInput &&
                    <div className={styles.inputDuration}>
                        <div>
                            <input autoFocus={true} type={"number"}
                                   className={styles.addDuration}
                                   name={"hours"}
                                   id={"hours"}
                                   onChange={(e) => {
                                       updateInputDuration(Number(e.target.value), state.inputDuration.min)
                                   }}
                                   value={state.inputDuration.hour}
                            />
                            <label htmlFor={"hours"}>: hours </label>
                        </div>
                        <div>
                            <input className={styles.addDuration} name={"minutes"} type={"number"}
                                   id={"minutes"}
                                   onChange={(e) => {
                                       updateInputDuration(state.inputDuration.hour, Number(e.target.value))
                                   }}
                                   value={state.inputDuration.min}
                            />
                            <label htmlFor={"minutes"}>: minutes</label>
                        </div>
                    </div>
                }
            </div>

            <div className={styles.duration}>
                {state.duration.map((item, index) => {
                    return <button key={index}
                                   onClick={() => {
                                       updateState(item)
                                       setState(prevState => ({...prevState, displayInput: false}))
                                   }}
                                   className={styles.durationButton + " " + (state.selectedDuration === item ? styles.active : "")}>{item}</button>
                })}
            </div>
        </>
    )
}