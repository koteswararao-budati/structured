import styles from "./Schedule.module.css"
import BodyHeader from "../TodoTasks/BodyHeader.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import ScheduleForm from "../ScheduleForm/ScheduleForm.tsx";
import {ScheduleFormContext} from "../../Context/ScheduleFormContext.tsx";


function Schedule() {
    const {displayScheduleForm} = useContext(AppRenderState).state
    const action = {
        type: APP_STATE_CONSTANTS.displayScheduleForm,
        payload: true
    }

    return (
        <>
            <ScheduleFormContext>
                {displayScheduleForm && <ScheduleForm/>}
            </ScheduleFormContext>
            <div className={styles.container}>
                <BodyHeader text={"Schedule"} action={action}/>
            </div>
        </>
    )
}

export default Schedule;