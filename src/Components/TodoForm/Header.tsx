import styles from "./TodoForm.module.css";
import {APP_STATE_CONSTANTS, MONTHS, TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import close from "../../assets/close.svg";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";

export default function Header() {
    const {selectedDate} = useContext(AppRenderState).state
    const {dispatch} = useContext(AppRenderState)
    const closeTodo = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.todoTask,
                payload: false
            })
        }
    }
    return (
        <div className={styles.close}>
            <h5>{selectedDate.getDate()}-{MONTHS[selectedDate.getMonth()]}-{selectedDate.getFullYear()}</h5>
            <button className={"btn btn-light"} onClick={closeTodo}>
                <img src={close} alt={"close"}/>
            </button>
        </div>
    )
}