import styles from "./Calendar.module.css";
import {APP_STATE_CONSTANTS, DAYS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

export default function DatesGenerator() {
    //State Declaration
    const appState = useContext(AppRenderState)
    const {todayDate} = appState.state
    const dispatch = appState.dispatch

    // Variable Declaration
    const days = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0);
    const startDay = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
    const dateList: number[] = []
    const daysList = DAYS

    //created Date list
    for (let i = startDay.getDate() - startDay.getDay(); i <= days.getDate(); i++) {
        dateList.push(i)
    }

    //dispatch State
    const updateCalendarDate = (date: number) => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDate,
                payload: new Date(todayDate.getFullYear(), todayDate.getMonth(), date)
            })
        }
    }


    // calendar date generator
    const dateGenerator = () => {
        return dateList.map((date, index) => {
            return <div key={index}
                        className={todayDate.getDate() === date ? styles.todayDate : styles.calendarDatesItems}
                        onClick={date > 0 ? () => updateCalendarDate(date) : () => null}
            >{date > 0 ? date : ""}</div>
        })
    }

    return (
        <div className={styles.calendarDates}>
            {daysList.map((day: string, index: number) => <div key={index}
                                                               className={styles.calendarDatesItems}>{day}</div>)}
            {dateGenerator()}
        </div>
    )

}