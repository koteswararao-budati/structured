import styles from "./SetRecurring.module.css";
import {useContext, useState} from "react";
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";
import {SCHEDULE_FORM_CONSTANTS} from "../../Constants/CONSTANTS.ts";

export default function SetRecurring() {
    const {dispatchScheduleForm} = useContext(ScheduleFormContextApi)
    const [recursionState, setRecursionState] = useState<number>(0);

    const updateRecursion = (index: number) => {
        setRecursionState(index)
        if (dispatchScheduleForm) {
            dispatchScheduleForm({
                type: SCHEDULE_FORM_CONSTANTS.recursion,
                payload: index
            })
        }
    }

    return (
        <div>
            <h5 style={{margin: "20px 0"}}>How often?</h5>
            <div className={styles.color}>
                {["Once", "Daily", "Weekly", "Monthly"].map((item, index) => {
                    return (
                        <button onClick={() => updateRecursion(index)}
                                className={styles.durationButton + " " + (recursionState === index ? styles.active : "")}
                                key={item}>{item}</button>
                    )
                })}
            </div>
        </div>
    )
}