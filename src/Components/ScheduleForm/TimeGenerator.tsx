import {Dispatch, useEffect, useState} from "react";
import styles from "./TimeGenerator.module.css"
import {scheduleFormInterface} from "../../Constants/INTERFACES.ts";

export default function TimeGenerator({scheduleState, setScheduleState}: {
    scheduleState: scheduleFormInterface,
    setScheduleState: Dispatch<scheduleFormInterface>
}) {

    const calTime = (num = 5) => {
        return new Date((scheduleState.time.getTime() + num * 60000))
    }
    const [updateTime, setUpdateTime] = useState(calTime());

    const incDec = (val = "+") => {
        if (val === "+") {
            setScheduleState({...scheduleState, time: calTime()})
            setUpdateTime(calTime(5 + scheduleState.duration))
        } else {
            setScheduleState({...scheduleState, time: calTime(-5)})
            setUpdateTime(calTime(-5 + scheduleState.duration))
        }
    }

    useEffect(() => {
        setUpdateTime(calTime(scheduleState.duration))
    }, [scheduleState.duration]);


    return (
        <>
            <h5 style={{margin: "20px 0 10px 0"}}>When?</h5>
            <div className={styles.timer}>
                <button onClick={() => incDec("-")}>-</button>
                <button className={styles.timerDisplay}>
                    {scheduleState.time.getHours() > 12 ? scheduleState.time.getHours() - 12 : scheduleState.time.getHours()} : {scheduleState.time.getMinutes()}
                    {scheduleState.duration > 1 && " - " + (updateTime.getHours() > 12 ? updateTime.getHours() - 12 : updateTime.getHours()) + ": " + updateTime.getMinutes()}
                </button>
                <button onClick={() => incDec()}>+</button>
            </div>


        </>
    )
}
