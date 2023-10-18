import styles from './Calendar.module.css'
import leftArrow from '../../assets/calendar-arrow-left.svg'
import rightArrow from '../../assets/calendar-arrow-right.svg'
import {APP_STATE_CONSTANTS, MONTHS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import DatesGenerator from "./DatesGenerator.tsx";

function Calendar() {
    const appContext = useContext(AppRenderState)
    const {calendarDate} = appContext.state
    const dispatch = appContext.dispatch
    // variables declaration

    //update Month
    const updateMonth = (n: number) => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDate,
                payload: new Date(calendarDate.getFullYear(), calendarDate.getMonth() + n, 1)
            })
        }
    }

    // jump button
    // update selected date calendarDisplay

    const updateCalendarDisplay = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.selectedDate,
                payload: new Date(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate())
            })
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDisplay,
                payload: false
            })
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
                <h3 className={styles.heading}>{MONTHS[calendarDate.getMonth()]} {calendarDate.getFullYear()}</h3>

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