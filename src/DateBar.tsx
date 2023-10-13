import './DateBar.css'
import {useState} from "react";
function DateBar(){

    //
    const presentDate = new Date()
    const [selectedDate, updateSelectedDate] = useState(presentDate.getDate())
    const dateList :Date[] = []

    //Date Generator
    for(let i = -4; i < 5; i++){
        dateList.push( new Date(presentDate.getFullYear(), presentDate.getMonth(), presentDate.getDate()+ i))
    }

    const updateDate = (date :Date)=>{
        updateSelectedDate(date.getDate())
    }

    // Element Generator
    const generateNavBarDate = ()=>{
        return dateList.map((date)=>{
            return (<div
                className={"NavBarElement" + (selectedDate === date.getDate() ? " NavBarElementToday": "")}
                onClick={()=>{updateDate(date)}}>
                {date.getDate()}
            </div>)
        })
    }

    return (
        <div className={"NavBar"}>
            {generateNavBarDate()}
        </div>
    )
}

export default DateBar;