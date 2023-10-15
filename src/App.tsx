import './App.css'
import DateBar from "./DateBar.tsx";
import MainBar from "./MainBar.tsx";
import {useState} from "react";

function App() {

    const [currentDate, updateCurrentDate] = useState(new Date())

    const updateWeek = (num :number)=>{
        updateCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + num))
    }

    return (
        <>
            <MainBar updateDate={updateWeek} presentDate={currentDate} />
            <DateBar presentDate={currentDate} updateDateState={updateCurrentDate}/>
        </>
    )
}
export default App
