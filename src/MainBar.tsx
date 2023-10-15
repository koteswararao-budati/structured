import left from "./assets/arrow-left.svg";
import right from "./assets/arrow-right.svg";
import "./MainBar.css"
import calendarIcon from "./assets/calendar.svg";

interface propsObject{
    updateDate : (num :number)=> void,
    presentDate: Date
}
function MainBar({updateDate, presentDate} :propsObject){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]
    const date = presentDate

    const updateWeek=(num :number)=>{
        updateDate(num)
    }
    return(
        <div className={"main"}>
            <div className={"left-elements"}>
            <button className={"button btn btn-light"} onClick={()=>updateWeek(-7)}><b><img src={left} alt={"left"}/></b></button>
            <div className={"month"}>
                {months[date.getMonth()]} {date.getFullYear()}
            </div>
            <button className={"button btn btn-light"} onClick={()=>updateWeek(+7)}><b><img src={right} alt={"right"}/></b></button>
            </div>
            <div className={""}>
                <button className={"button calendar btn btn-light"}>
                    <img src={calendarIcon} alt={""} />
                </button>
            </div>
        </div>
    )
}

export default MainBar;

