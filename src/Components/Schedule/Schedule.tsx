import styles from "./Schedule.module.css"
import BodyHeader from "../TodoTasks/BodyHeader.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import TodoForm from "../TodoForm/TodoForm.tsx";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";


function Schedule() {
    const {todoTaskForm} = useContext(AppRenderState).state
    const action = {
        type: APP_STATE_CONSTANTS.todoTaskForm,
        payload: true
    }

    return (
        <>
            {todoTaskForm && <TodoForm/>}
            <div className={styles.container}>
                <BodyHeader text={"Schedule"} action={action}/>
            </div>
        </>
    )
}

export default Schedule;