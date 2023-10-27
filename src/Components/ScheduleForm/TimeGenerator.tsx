import {useState} from "react";
import styles from "./TimeGenerator.module.css"

export default function TimeGenerator() {

    const [state, setState] = useState({
        time: "",
        duration: [1, 15, 30, 45, 60],
        displayInput: false
    })

    return (
        <>
            <div className={styles.container}>
                <h5>How long?</h5>
                <button onClick={() => {
                    setState({...state, displayInput: !state.displayInput})
                }} className={"btn btn-light"}>more?
                </button>
                {state.displayInput &&
                    <div className={styles.inputDuration}>
                        <div>
                            <input autoFocus={true} type={"number"} min={0} max={11}
                                   className={styles.addDuration}/>
                            <label>: hours</label>
                        </div>
                        <div>
                            <input className={styles.addDuration} type={"number"} min={1} max={59}/>
                            <label>: minutes</label>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.duration}>
                {state.duration.map((item, index) => {
                    return <button key={index} className={styles.durationButton}>{item}</button>
                })}
            </div>
            <div style={{margin: "20px 0"}}>
                <h5>What Color?</h5>
            </div>
            <div className={styles.color}>
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"} value={"#ee82ee"} disabled={true}/>
                </button>
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"} value={"#3cb371"} disabled={true}/>
                </button>
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"} value={"#6a5acd"} disabled={true}/>
                </button>
                <button className={styles.colorButton}>
                    <input className={styles.colorInput} type={"color"} value={"#ffffff"} disabled={true}/>
                </button>
                <button className={styles.colorButton}>
                    <input type={"color"} className={styles.colorInput}/>
                </button>
            </div>
        </>
    )
}
