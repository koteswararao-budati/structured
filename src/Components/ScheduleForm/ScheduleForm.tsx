import close from "../../assets/close.svg"
import styles from "./ScheduleForm.module.css"
import {useContext, useEffect, useState} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import TimeGenerator from "./TimeGenerator.tsx";
import Duration from "./Duration.tsx";
import ColorGenerator from "./ColorGenerator.tsx";
import SetRecurring from "./SetRecurring.tsx";
import AlertNotification from "./AlertNotification.tsx";
import {scheduleFormInterface} from "../../Constants/INTERFACES.ts";

function ScheduleForm() {
    const {dispatch} = useContext(AppRenderState)
    const [state, setState] = useState<scheduleFormInterface>({
        time: new Date(),
        inputTask: "",
        duration: 15,
        color: "",
        recursion: 0,
        notification: []
    })


    const closeForm = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.displayScheduleForm,
                payload: false
            })
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.heading}>
                    <h3>Create Task</h3>
                    <button className={"btn btn-light "} onClick={closeForm}><img src={close}
                                                                                  alt={"close"}/>
                    </button>
                </div>

                <div className={styles.main}>
                    <input autoFocus={true} className={styles.input} placeholder={"Add Task"}
                           onChange={(e) => setState({...state, inputTask: e.target.value})}
                           value={state.inputTask}/>
                    <TimeGenerator scheduleState={state} setScheduleState={setState}/>
                    <Duration scheduleState={state} setScheduleState={setState}/>
                    <ColorGenerator scheduleState={state} setScheduleState={setState}/>
                    <SetRecurring scheduleState={state} setScheduleState={setState}/>
                    <AlertNotification scheduleState={state} setScheduleState={setState}/>
                    <div>
                        <h5 style={{margin: "20px 0"}}>Any Details?</h5>
                        <textarea placeholder={"Add notes, meeting links, or phone numbers"}
                                  className={styles.textArea}></textarea>
                    </div>

                    <button className={styles.createTask}><h5>Create Task</h5></button>
                </div>
            </div>
        </div>
    )
}

export default ScheduleForm;