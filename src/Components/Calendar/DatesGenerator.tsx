import styles from "./Calendar.module.css";
import {APP_STATE_CONSTANTS, DAYS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

export default function DatesGenerator() {
    //State Declaration
    const appState = useContext(AppRenderState)
    const {calendarDate} = appState.state
    const dispatch = appState.dispatchScheduleForm

    // Variable Declaration
    const days = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0);
    const startDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1)
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
                payload: new Date(calendarDate.getFullYear(), calendarDate.getMonth(), date)
            })
        }
    }


    // calendar date generator
    const dateGenerator = () => {
        return dateList.map((date, index) => {
            return <div key={index}
                        className={calendarDate.getDate() === date ? styles.presentDay : styles.calendarDatesItems}
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