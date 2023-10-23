import styles from "./TodoTasks.module.css"
import slider from "../../assets/sliders.svg"
import check from "../../assets/check.svg"
import trash from "../../assets/trash.svg"
import edit from "../../assets/edit.svg"
import close from "../../assets/close.svg"
import addIcon from "../../assets/plus-circle.svg"
import TodoForm from "../TodoForm/TodoForm.tsx";
import {useContext, useState} from "react";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";
import {TODO_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import FlagSVG from "../TodoForm/FlagSVG.tsx";


interface optionsState {
    id: null | number,
}

function TodoTasks() {
    const {state, dispatch} = useContext(TodoTasksContext)
    const [task,] = useState(state.tasks)
    const [editOptions, setEditOptionsState,] = useState<optionsState>({
        id: null,
    })


    const generateTasks = () => {
        return task?.toDo.map((item, index) => {
                return (
                    <div key={index}>
                        {editOptions.id !== index ?
                            <div className={styles.addTaskContainer + " " + styles.addTask}
                            >
                                <h5 className={styles.todo}>{item}</h5>
                                <div className={styles.edit}>
                                    <button className={"btn btn-light"}><FlagSVG color={"red"}/></button>
                                    <button className={"btn btn-light"}
                                            onClick={() => setEditOptionsState({id: index})}
                                    ><img src={slider} alt={"slider"}/></button>

                                </div>
                            </div>
                            :
                            <div className={styles.editOptions + " " + styles.addTaskContainer}>
                                <button
                                    className={"btn btn-light"}
                                ><img src={check} alt={"completed"}/>
                                </button>
                                <button
                                    className={"btn btn-light"}
                                ><img src={edit} alt={"edit"}/>
                                </button>
                                <button
                                    className={"btn btn-light"}
                                ><img src={trash} alt={"delete"}/>
                                </button>
                                <button
                                    className={"btn btn-light"}
                                    onClick={() => setEditOptionsState({id: null})}
                                ><img src={close} alt={"close"}/>
                                </button>
                            </div>
                        }
                    </div>
                )
            }
        )
    }

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
                    <button className={" btn btn-light"} onClick={displayTask}>
                        <img src={addIcon} alt={"AddTask"}/>
                    </button>
                </div>
                <div className={styles.individualTask}>
                    {generateTasks()}
                </div>
            </div>
        </>
    )
}

export default TodoTasks;