import styles from "./MainBar.module.css"
import calendarIcon from "../../assets/calendar.svg";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import LeftElements from "./LeftElements.tsx";
import house from "../../assets/house.svg";
import todo from "../../assets/todo.svg"
import schedule from "../../assets/schedule.svg"

function MainBar() {

    const {state, dispatch} = useContext(AppRenderState)

    const toggleDisplay = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.displayTodo,
                payload: !state.displayTodo
            })
        }
    }

    const updateCalendarDate = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDisplay,
                payload: !state.displayCalendar
            })
        }
    }

    const updateHome = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.selectedDate,
                payload: state.todayDate
            })

            dispatch({
                type: APP_STATE_CONSTANTS.calendarDate,
                payload: state.todayDate
            })
        }
    }


    return (
        <div className={styles.main}>
            <LeftElements/>
            <div className={styles.rightElements}>
                <button className={"btn btn-light"} onClick={toggleDisplay}>
                    <img src={state.displayTodo ? schedule : todo} alt={"todo"}/>
                </button>
                <button className={"btn btn-light " + styles.home} onClick={updateHome}>
                    <img src={house} alt={"Home"}/>
                </button>
                <button className={"btn btn-light " + styles.calendar}
                        onClick={updateCalendarDate}>
                    <img src={calendarIcon} alt={""}/>
                </button>
            </div>
        </div>
    )
}

export default MainBar;