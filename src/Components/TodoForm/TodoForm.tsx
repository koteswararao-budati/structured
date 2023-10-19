import styles from "./TodoForm.module.css"
import close from "../../assets/close.svg"
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {MONTHS, TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";
import FlagSVG from "./FlagSVG.tsx";

function TodoForm() {
    const {selectedDate} = useContext(AppRenderState).state
    const {dispatch} = useContext(TodoTasksContext)

    const svgGenerator = () => {
        const svgList = ["red", "orange", "darkgreen"]
        return svgList.map((color) => <button className={"btn btn-light"}><FlagSVG color={color}/></button>
        )
    }
    const closeTodo = () => {
        if (dispatch !== null) {
            dispatch({
                type: TODO_STATE_CONSTANTS.todoTask,
                payload: false
            })
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.todo}>
                <div className={styles.close}>
                    <h5>{selectedDate.getDate()}-{MONTHS[selectedDate.getMonth()]}-{selectedDate.getFullYear()}</h5>
                    <button onClick={closeTodo}>
                        <img src={close} alt={"close"}/>
                    </button>
                </div>
                <div className={styles.tasks}>
                    <h3>Add Task</h3>
                    <div>
                        <input className={styles.inputTask} type={"text"} placeholder={"Add Task"}
                               onChange={((e) => console.log(e.target.value))}/>
                        <div className={styles.flags}>
                            <label>Flag: </label>
                            {svgGenerator()}
                        </div>
                    </div>
                    <div className={styles.submit}>
                        <button className={styles.submitTask}>Add One More</button>
                        <button className={styles.submitTask}>Done</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodoForm;