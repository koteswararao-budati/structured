import './css/App.css'
import DateBar from "./Components/DateBar.tsx";
import MainBar from "./Components/MainBar.tsx";
import {useState} from "react";
import Calendar from "./Components/Calendar.tsx";

function App() {

    const [currentDate, updateCurrentDate] = useState(new Date())

    const updateWeek = (num :number)=>{
        updateCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + num))
    }

    return (
        <div className={"main-app"}>
            <MainBar updateDate={updateWeek} presentDate={currentDate} />
            <DateBar presentDate={currentDate} updateDateState={updateCurrentDate}/>
            <Calendar updateDateState={updateCurrentDate}/>
        </div>
    )
}
export default App
