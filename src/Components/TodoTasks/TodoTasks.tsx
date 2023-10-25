import styles from "./TodoTasks.module.css"
import TodoForm from "../TodoForm/TodoForm.tsx";
import {useContext} from "react";
import TodoGenerator from "./TodoGenerator.tsx";
import BodyHeader from "./BodyHeader.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

function TodoTasks() {
    const {state} = useContext(AppRenderState)

    const action = {
        type: APP_STATE_CONSTANTS.todoTask,
        payload: true
    }

    return (
        <>
            {state.todoTask && <TodoForm/>}
            <div className={styles.tasks}>
                <BodyHeader text={"Todo Tasks"} action={action}/>
                <div className={styles.individualTask}>
                    <TodoGenerator/>
                </div>
            </div>
        </>
    )
}

export default TodoTasks;