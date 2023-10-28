import styles from "./TimeGenerator.module.css";
import {useContext} from "react";
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";
import {SCHEDULE_FORM_CONSTANTS} from "../../Constants/CONSTANTS.ts";

export default function SetRecurring() {
    const {dispatchScheduleForm} = useContext(ScheduleFormContextApi)

    const updateRecursion = (index: number) => {
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
                                className={styles.durationButton} key={item}>{item}</button>
                    )
                })}
            </div>
        </div>
    )
}