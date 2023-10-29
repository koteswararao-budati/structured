import styles from "./AlertNotification.module.css";
import bell from "../../assets/bell.svg";
import close from "../../assets/x-lg.svg";
import check from "../../assets/check_alert.svg"
import {useContext, useState} from "react";
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";

export default function AlertNotification() {
    const {dispatchScheduleForm} = useContext(ScheduleFormContextApi)
    const [alertState, setAlertState] = useState<string[]>(["Alert at Start of the task", "Alert at End of the task"])
    const [displayState, setDisplayState] = useState<boolean>(false)
    const [inputDuration, setInputDuration] = useState<number>(1)

    const deleteAlert = (num: number) => {
        const updatedItems = alertState.filter((_, index) => index !== num)
        setAlertState(updatedItems)
    }

    const addAlertsToState = (num: number) => {
        if (num <= 0) {
            return null;
        }
        setAlertState([...alertState, `Alert at ${num} ${num > 1 ? 'minutes' : 'minute'} before the task starts`])
        if (dispatchScheduleForm) {
            dispatchScheduleForm({
                type: "",
                payload: -num
            })
        }
        setInputDuration(1)
        setDisplayState(false)
    }

    return (
        <div>
            <h5 style={{margin: "20px 0 10px 0"}}>Need Alerts?</h5>
            {alertState.length === 0 && !displayState ? <h6>No Alerts</h6> : ""}
            {alertState.map((item, index) => {
                return (
                    <div className={styles.alerts} key={index}>
                        <h6 style={{fontSize: "14px"}}>
                            <img src={bell} alt={"bell"}/>
                            {item}</h6>
                        <button className={"btn btn-light"} onClick={() => deleteAlert(index)}>
                            <img className={styles.alertClose} src={close} alt={"close"}/>
                        </button>
                    </div>
                )
            })}
            {displayState && <>
                <div className={styles.alerts}>
                    <h6 style={{fontSize: "14px"}}>
                        <img src={bell} alt={"bell"}/>
                        Alert at <input autoFocus={true}
                                        value={inputDuration > 0 ? inputDuration : ""}
                                        onChange={(e) => setInputDuration(Number(e.target.value))}
                                        className={styles.inputTaskMinutes}
                                        type={"number"}/> {inputDuration > 1 ? "minutes " : "minute "}before the task
                        starts

                    </h6>
                    <button onClick={() => addAlertsToState(inputDuration)} className={"btn btn-light"}>
                        <img className={styles.alertClose} src={check} alt={"check"}/>
                    </button>
                </div>
            </>}
            <div>
                <button onClick={() => setDisplayState(!displayState)} className={"btn btn-light"}
                        style={{width: "100%"}}>
                    + Add Alerts
                </button>

            </div>
        </div>
    )
}