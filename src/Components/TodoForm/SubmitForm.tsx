import styles from "./TodoForm.module.css";
import {useContext} from "react";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";


export default function SubmitForm({todo}: { todo: string }) {
    const {selectedDate} = useContext(AppRenderState).state
    const {state, dispatch} = useContext(TodoTasksContext)

    console.log(state)

    const dispatchTodo = () => {
        if (dispatch !== null) {
            dispatch({
                type: TODO_STATE_CONSTANTS.todoList,
                payload: {
                    date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
                    toDo: todo

                }
            })
        }
    }

    return (
        <div className={styles.submit}>
            <button className={styles.submitTask}>Add One More</button>
            <button className={styles.submitTask} onClick={dispatchTodo}>Done</button>
        </div>
    )
}