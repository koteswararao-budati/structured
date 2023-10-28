import styles from "./ColorGenerator.module.css";
import {useContext, useState} from "react";
import {ScheduleFormContextApi} from "../../Context/ScheduleFormContext.tsx";
import {SCHEDULE_FORM_CONSTANTS} from "../../Constants/CONSTANTS.ts";

export default function ColorGenerator() {
    const {dispatchScheduleForm} = useContext(ScheduleFormContextApi)
    const [colorState, setColorState] = useState("#ee82ee");
    const [outline, setOutline] = useState(false)
    const colorsList = ["#ee82ee", "#3cb371", "#6a5acd", "#ffffff",]

    const updateColor = (color: string, render: string) => {
        setOutline(render !== "svg")
        setColorState(color)
        if (dispatchScheduleForm) {
            dispatchScheduleForm({
                type: SCHEDULE_FORM_CONSTANTS.color,
                payload: color
            })
        }
    }

    return (
        <>
            <div style={{margin: "20px 0"}}>
                <h5>What Color?</h5>
            </div>
            <div className={styles.color}>
                {colorsList.map((item, index) => {
                    return <button
                        className={styles.colorButton + " "}
                        key={index}
                        onClick={() => updateColor(item, "svg")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={"30"} height={"30"} fill={item}
                             className={"bi bi-circle-fill" + " " + (colorState === item ? styles.buttonSelected : "")}
                             viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                        </svg>
                    </button>
                })}
                <button className={styles.colorButton}>
                    <input className={styles.colorInput + " " + (outline ? styles.buttonSelected : "")}
                           onClick={(e) => updateColor(e.currentTarget.value, "input")}
                           onChange={(e) => updateColor(e.currentTarget.value, "input")}
                           type={"color"}/>
                </button>
            </div>
        </>
    )
}