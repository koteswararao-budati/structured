import close from "../../assets/close.svg"
import styles from "./ScheduleForm.module.css"
import {useContext, useState} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";

function ScheduleForm() {
    const {dispatch} = useContext(AppRenderState)
    const [inputTask, setInputTask] = useState("")

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

                <input autoFocus={true} className={styles.input} placeholder={"Add Task"}
                       onChange={(e) => setInputTask(e.target.value)}
                       value={inputTask}/>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default ScheduleForm;