import styles from "./AlertNotification.module.css";
import bell from "../../assets/bell.svg";
import close from "../../assets/x-lg.svg";
import {scheduleFormInterface} from "../../Constants/INTERFACES.ts";
import {Dispatch} from "react";

export default function AlertNotification({scheduleState, setScheduleState}: {
    scheduleState: scheduleFormInterface,
    setScheduleState: Dispatch<scheduleFormInterface>
}) {
    return (

        <div>
            <h5 style={{margin: "20px 0 10px 0"}}>Need Alerts?</h5>
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
                    + Add Alerts
                </button>

            </div>
        </div>
    )
}