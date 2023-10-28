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
            time: new Date(),
            selectedDuration: 15
        }
    )

    const updateState = (num: number) => {
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
                                   onClick={() => updateState(item)}
                                   className={styles.durationButton}>{item}</button>
                })}
            </div>
        </>
    )
}