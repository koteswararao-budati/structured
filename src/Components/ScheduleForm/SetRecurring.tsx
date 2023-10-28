import styles from "./TimeGenerator.module.css";
import {scheduleFormInterface} from "../../Constants/INTERFACES.ts";
import {Dispatch} from "react";

export default function SetRecurring({scheduleState, setScheduleState}: {
    scheduleState: scheduleFormInterface,
    setScheduleState: Dispatch<scheduleFormInterface>
}) {

    return (
        <div>
            <h5 style={{margin: "20px 0"}}>How often?</h5>
            <div className={styles.color}>
                {["Once", "Daily", "Weekly", "Monthly"].map((item, index) => {
                    return (
                        <button onClick={() => setScheduleState({...scheduleState, recursion: index})}
                                className={styles.durationButton} key={item}>{item}</button>
                    )
                })}
            </div>
        </div>
    )
}