import './css/App.css'
import DateBar from "./Components/DateBar/DateBar.tsx";
import MainBar from "./Components/MainBar/MainBar.tsx";
import {AppRenderContext, AppRenderState} from "./Context/AppRenderContext.tsx";
import {useContext} from "react";
import Calendar from "./Components/Calendar/Calendar.tsx";

function App() {
    const appRenderState = useContext(AppRenderState)
    const {displayCalendar} = appRenderState.state

    return (
        <div className={"main-app"}>
            <AppRenderContext>
                <MainBar/>
                <DateBar/>
                {displayCalendar && <Calendar/>}
            </AppRenderContext>
        </div>
    )
}

export default App
