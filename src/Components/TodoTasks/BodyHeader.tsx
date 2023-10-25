import styles from "./BodyHeader.module.css";
import addIcon from "../../assets/plus-circle.svg";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

export default function BodyHeader({text, type}: { text: string, type: string }) {

    const {dispatch} = useContext(AppRenderState)
    const displayTask = () => {
        if (dispatch !== null) {
            dispatch({
                type: type,
                payload: true
            })
        }
    }

    return (
        <div className={styles.heading}>
            <h3>{text}</h3>
            <button className={" btn btn-light"} onClick={displayTask}>
                <img src={addIcon} alt={"AddTask"}/>
            </button>
        </div>
    )
}