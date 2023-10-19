import styles from "./TopTaskForm.module.css"
import close from "../../assets/close.svg"
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import {MONTHS} from "../../Constants/CONSTANTS.ts";

function TopTaskForm() {
    const {selectedDate} = useContext(AppRenderState).state
    return (
        <div className={styles.container}>
            <div className={styles.close}>
                <h5>{selectedDate.getDate()}-{MONTHS[selectedDate.getMonth()]}-{selectedDate.getFullYear()}</h5>
                <button>
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
                        <input className={styles.red} type={"radio"} name={"flag"} value={"red"}/>
                        <input className={styles.yellow} type={"radio"} name={"flag"} value={"yellow"}/>
                        <input className={styles.green} type={"radio"} name={"flag"} value={"green"}/>
                    </div>
                </div>
                <div className={styles.submit}>
                    <button className={styles.submitTask}>Add One More</button>
                    <button className={styles.submitTask}>Done</button>
                </div>
            </div>

        </div>
    )
}

export default TopTaskForm;