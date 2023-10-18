import styles from './Calendar.module.css'
import leftArrow from '../../assets/calendar-arrow-left.svg'
import rightArrow from '../../assets/calendar-arrow-right.svg'
import {APP_STATE_CONSTANTS, MONTHS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import DatesGenerator from "./DatesGenerator.tsx";

function Calendar() {
    const appContext = useContext(AppRenderState)
    const state = appContext.state
    const dispatch = appContext.dispatch
    // variables declaration
    const presentDay = state.todayDate

    //update Month
    const updateMonth = (n: number) => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDate,
                payload: new Date(presentDay.getFullYear(), presentDay.getMonth() + n, presentDay.getDay())
            })
        }
    }

    // update calendarDisplay

    const updateCalendarDisplay = () => {
        if (dispatch !== null) {
            dispatch({type: APP_STATE_CONSTANTS.selectedDate, payload: presentDay})
            dispatch({type: APP_STATE_CONSTANTS.calendarDisplay, payload: false})
        }
    }

    return (
        <div className={styles.calendarCard}>
            <div className={styles.topNavBar}>

                {/*button left - change month*/}
                <button
                    onClick={() => updateMonth(-1)}
                    className={"btn " + styles.topNavBarButton}>
                    <img src={leftArrow} alt={"left"}/>
                </button>
                <h3>{MONTHS[presentDay.getMonth()]} {presentDay.getFullYear()}</h3>

                {/*button right - change month*/}
                <button
                    onClick={() => updateMonth(1)}
                    className={"btn " + styles.topNavBarButton}>
                    <img src={rightArrow} alt={"right"}/>
                </button>
            </div>

            {/* Dates generator */}
            <DatesGenerator/>

            {/* Jump to Date Button */}
            <button
                onClick={() => {
                    updateCalendarDisplay()
                }}
                className={"btn btn-dark " + styles.jumpButton}>Jump To This Date
            </button>
        </div>
    )
}

export default Calendar;