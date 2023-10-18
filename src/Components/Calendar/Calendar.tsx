import styles from './Calendar.module.css'
import leftArrow from '../../assets/calendar-arrow-left.svg'
import rightArrow from '../../assets/calendar-arrow-right.svg'
import {DAYS, MONTHS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

function Calendar() {
    const appContext = useContext(AppRenderState)
    const state = appContext.state
    const dispatch = (appContext.dispatch !== null && appContext.dispatch)
    // variables declaration
    const presentDay = new Date()
    const days = new Date(presentDay.getFullYear(), presentDay.getMonth() + 1, 0);
    const startDay = new Date(presentDay.getFullYear(), presentDay.getMonth(), 1)
    const dateList: number[] = []
    const daysList = DAYS

    //created Date list
    for (let i = startDay.getDate() - startDay.getDay(); i <= days.getDate(); i++) {
        dateList.push(i)
    }

    // calendar date generator
    const dateGenerator = () => {
        return dateList.map((date, index) => {
            return <div key={index}
                        className={presentDay.getDate() === date ? styles.presentDay : styles.calendarDatesItems}
                        onClick={date > 0 ? () => dispatch(state, {
                            type: "CALENDAR_DATE",
                            payload: new Date(presentDay.getFullYear(), presentDay.getMonth(), date)
                        }) : () => null}
            >{date > 0 ? date : ""}</div>
        })
    }


    //update Month
    const updateMonth = (n: number) => {
        dispatch(state, {
            type: "CALENDAR_DATE",
            payload: new Date(presentDay.getFullYear(), presentDay.getMonth() + n, presentDay.getDay())
        })
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
            <div className={styles.calendarDates}>
                {daysList.map((day: string, index: number) => <div key={index}
                                                                   className={styles.calendarDatesItems}>{day}</div>)}
                {dateGenerator()}
            </div>

            {/* Jump to Date Button */}
            <button
                onClick={() => {
                    dispatch(state, {type: "SELECTED_DATE", payload: presentDay})
                    dispatch(state, {type: "CALENDER_DISPLAY", payload: false})
                }
                }
                className={"btn btn-dark " + styles.jumpButton}>Jump To This Date
            </button>
        </div>
    )
}

export default Calendar;