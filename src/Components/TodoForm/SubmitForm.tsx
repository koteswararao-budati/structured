import styles from "./TodoForm.module.css";
import {useContext} from "react";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {APP_STATE_CONSTANTS, TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";


export default function SubmitForm({todo, flagColor}: { todo: string, flagColor: string }) {
    const {dispatch} = useContext(AppRenderState)
    const dispatchAxios = useContext(TodoTasksContext).dispatchScheduleForm

    const closeTodo = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.todoTaskForm,
                payload: false
            })
        }
    }


    const dispatchTodo = () => {
        if (dispatchAxios !== null) {
            dispatchAxios({
                type: TODO_STATE_CONSTANTS.todoList,
                payload: {
                    action: todo,
                    flag: flagColor,
                    status: "incomplete"
                }
            })
            closeTodo()
        }
    }

    return (
        <div className={styles.submit}>
            <button onClick={dispatchTodo} className={styles.submitTask} disabled={todo.length === 0}>
                Add Task
            </button>
            <button className={styles.submitTask} onClick={closeTodo}>Cancel</button>
        </div>
    )
}