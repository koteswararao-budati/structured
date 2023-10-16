import styles from '../css/Calendar.module.css'
import {useState} from "react";

interface propsObject{
    updateDateState: (date :Date)=>void
}

function Calendar({updateDateState} :propsObject){

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]

    const [presentDay, setPresentDayState]= useState(new Date())
    const days = new Date(presentDay.getFullYear(), presentDay.getMonth() +1, 0);
    const startDay = new Date(presentDay.getFullYear(), presentDay.getMonth(), 1)
    const dateList :number[] = []

    for(let i = startDay.getDate()-startDay.getDay(); i <= days.getDate(); i++){
        startDay.setDate(i)
        dateList.push(startDay.getDate())
    }
    const dateGenerator = ()=>{
        return dateList.map((date, index)=> {
            return <div key={index}
                        className={presentDay.getDate() === date ? styles.presentDay: styles.calendarDatesItems}
                        onClick={()=>setPresentDayState(new Date(presentDay.getFullYear(), presentDay.getMonth(), date))}
            >{date}</div>
        })
    }

    return(
        <div className={styles.calendarCard}>
            <div>
                <h3>{months[presentDay.getMonth()]} {presentDay.getFullYear()}</h3>
            </div>
            <div className={styles.calendarDates}>
                {dateGenerator()}
            </div>
            <button
                onClick={()=>updateDateState(presentDay)}
                className={"btn btn-dark " + styles.jumpButton}>Jump To This Date</button>
        </div>
    )
}

export default Calendar;