import {useContext, useEffect, useState} from "react";
import styles from "./TimeGenerator.module.css"
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";
import {SCHEDULE_FORM_CONSTANTS} from "../../Constants/CONSTANTS.ts";

export default function TimeGenerator() {

    const {time, duration} = useContext(ScheduleFormContextApi).state
    const dispatch = useContext(ScheduleFormContextApi).dispatchScheduleForm


    useEffect(() => {
        setUpdateTime(calTime(duration))
        if (dispatch) {
            dispatch({
                type: SCHEDULE_FORM_CONSTANTS.time,
                payload: new Date()
            })
        }
    }, [duration]);

    const calTime = (num = 5) => {
        return new Date((time.getTime() + num * 60000))
    }
    const [updateTime, setUpdateTime] = useState(calTime());

    const incDec = (val = "+") => {
        if (val === "+") {
            if (dispatch) {
                dispatch({type: SCHEDULE_FORM_CONSTANTS.time, payload: calTime()})
            }
            setUpdateTime(calTime(5 + duration))
        } else {
            if (dispatch) {
                dispatch({type: SCHEDULE_FORM_CONSTANTS.time, payload: calTime(-5)})
            }
            setUpdateTime(calTime(-5 + duration))
        }
    }


    return (
        <>
            <h5 style={{margin: "20px 0 10px 0"}}>When?</h5>
            <div className={styles.timer}>
                <button onClick={() => incDec("-")}>-</button>
                <button className={styles.timerDisplay}>
                    {(time.getHours() > 12 ? time.getHours() - 12 : time.getHours()) + " : " + time.getMinutes()}
                    {time.getHours() < 12 && updateTime.getHours() > 11 ? " am" : ""}
                    {duration > 1 && " - " + (updateTime.getHours() > 12 ? updateTime.getHours() - 12
                        : updateTime.getHours()) + ": " + updateTime.getMinutes()}
                    {updateTime.getHours() >= 12 ? " pm" : " am"}
                </button>
                <button onClick={() => incDec()}>+</button>
            </div>


        </>
    )
}
