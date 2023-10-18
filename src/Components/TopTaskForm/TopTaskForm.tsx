import styles from "./TopTaskForm.module.css"

function TopTaskForm() {
    return (
        <div className={styles.topTaskForm}>
            <div className={styles.tasks}>
                <h3>Top 3 Task of The Day</h3>
                <div>
                    <label>First Task</label>
                    <input type={"text"} placeholder={"Hello"}
                           onChange={((e) => console.log(e.target.value))}/>
                </div>
                <div>
                    <label>First Task</label>
                    <input type={"text"} placeholder={"Hello"}
                           onChange={((e) => console.log(e.target.value))}/>
                </div>
                <div>
                    <label>First Task</label>
                    <input type={"text"} placeholder={"Hello"}
                           onChange={((e) => console.log(e.target.value))}/>
                </div>

            </div>
            <div className={styles.tasks}>
                <h3>Top 3 Good to Complete tasks</h3>
                <div>
                    <label>Task</label>
                    <input
                        onChange={((e) => console.log(e.target.value))}/>
                </div>
                <div>
                    <label>First Task</label>
                    <input type={"text"} placeholder={"Hello"}
                           onChange={((e) => console.log(e.target.value))}/>
                </div>
                <div>
                    <label>First Task</label>
                    <input type={"text"} placeholder={"Hello"}
                           onChange={((e) => console.log(e.target.value))}/>
                </div>
            </div>
            <button className={styles.submitTask}>Submit</button>
        </div>
    )
}

export default TopTaskForm;