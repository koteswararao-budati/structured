import styles from "./TodoGenerator.module.css";
import FlagSVG from "../TodoForm/FlagSVG.tsx";
import slider from "../../assets/sliders.svg";
import check from "../../assets/check.svg";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import close from "../../assets/close.svg";
import {useContext, useState} from "react";
import {TodoTasksContext} from "../../Context/ToDoContext.tsx";


interface optionsState {
    id: null | number,
}

export default function TodoGenerator() {
    const {state} = useContext(TodoTasksContext)
    const [editOptions, setEditOptionsState,] = useState<optionsState>({
        id: null,
    })

    const editButtonsGenerator = () => {
        return (
            <div className={styles.editOptions + " "}>
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
        )
    }
    const generateTasks = () => {
        if (state?.length === 1 && state[0].action === "") {
            return (
                <div style={{color: "white", borderTop: "1px solid white",}}>
                    <h4 style={{padding: "10px 0"}}>Caught up with all tasks!! 😉😎</h4>
                </div>
            )
        }
        return state?.map((item, index) => {
                if (item.action === "") {
                    return <div key={index}></div>
                }
                return (
                    <div key={index} className={styles.individualTask}>
                        {editOptions.id !== index ?
                            <div className={styles.addTask}
                            >
                                <h5 className={styles.todo}>{item.action}</h5>
                                <div className={styles.edit}>
                                    <button className={"btn btn-light"}><FlagSVG
                                        color={item.flag !== "" ? item.flag : "darkgreen"}/></button>
                                    <button className={"btn btn-light"}
                                            onClick={() => setEditOptionsState({id: index})}
                                    ><img src={slider} alt={"slider"}/></button>

                                </div>
                            </div>
                            :
                            <>
                                {editButtonsGenerator()}
                            </>
                        }
                    </div>
                )
            }
        )
    }


    return (
        <div className={styles.addTaskContainer}>
            {generateTasks()}
        </div>
    )
}