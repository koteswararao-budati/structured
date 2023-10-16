import '../css/DateBar.css'

interface propsObject{
    presentDate: Date,
    updateDateState: (date: Date)=> void,
}
function DateBar({presentDate, updateDateState} :propsObject){

    //
    const days :string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dateList :Date[] = []

    //Date Generator
    for(let i = 0; i < 7; i++){
        dateList.push( new Date(presentDate.getFullYear(), presentDate.getMonth(), presentDate.getDate()- presentDate.getDay() + i))
    }

    const updateDate = (date :Date)=>{
        updateDateState(date)
    }

    // Element Generator
    const generateNavBarDate = ()=>{
        return dateList.map((date)=>{
            return (
                <div
                    key={date.getDay()}
                    className={"NavBarElement col" + (presentDate.getDate() === date.getDate() ? " NavBarElementToday": "")}
                    onClick={()=>{updateDate(date)}}>
                    {days[date.getDay()].slice(0, 3)}
                    <br />
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