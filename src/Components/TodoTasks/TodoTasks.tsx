import styles from "./TodoTasks.module.css"
import addIcon from "../../assets/plus-circle.svg"
import TodoForm from "../TodoForm/TodoForm.tsx";
import {useContext} from "react";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";
import {TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";

function TodoTasks() {
    const {state, dispatch} = useContext(TodoTasksContext)


    const displayTask = () => {
        if (dispatch !== null) {
            dispatch({
                type: TODO_STATE_CONSTANTS.todoTask,
                payload: true
            })
        }
    }
    return (
        <>
            {state.todoTask && <TodoForm/>}
            <div className={styles.tasks}>
                <div className={styles.heading}>
                    <h3>To-Do Tasks</h3>
                    <button className={styles.addTask + " btn btn-light"} onClick={displayTask}>
                        <img src={addIcon} alt={"AddTask"}/>
                    </button>
                </div>
                <div className={styles.individualTask}>
                    <h3>hello</h3>
                </div>
            </div>
        </>
    )
}

export default TodoTasks;