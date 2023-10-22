import styles from "./TodoForm.module.css"
import {useState} from "react";
import FlagSVG from "./FlagSVG.tsx";
import Header from "./Header.tsx";
import SubmitForm from "./SubmitForm.tsx";

function TodoForm() {
    const [buttonFlag, setButtonFlag] = useState<null | string>(null)
    const [inputText, setInputText] = useState("")
    const svgGenerator = () => {
        const svgList = ["red", "orange", "darkgreen"]
        return svgList.map((color) => <button key={color} onClick={() => setButtonFlag(color)}
                                              className={styles.flagsButton + " " + (color === buttonFlag ? styles.selectedFlag : "")}>
            <FlagSVG color={color}/></button>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.todo}>

                <Header/>
                <div className={styles.tasks}>
                    <h3>Add Task</h3>
                    <div>
                        <input className={styles.inputTask} type={"text"} placeholder={"Add Task"}
                               value={inputText} autoFocus={true}
                               onChange={((e) => setInputText(e.target.value))}/>
                        <div className={styles.flags}>
                            <label>Flag: </label>
                            {svgGenerator()}
                        </div>
                    </div>
                    <SubmitForm todo={inputText}/>
                </div>

            </div>
        </div>
    )
}

export default TodoForm;