import './DateBar.css'
import {APP_STATE_CONSTANTS, DAYS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

function DateBar() {

    const appContext = useContext(AppRenderState)
    const state = appContext.state
    const dispatch = appContext.dispatch
    const presentDate = state.todayDate

    //
    const days: string[] = DAYS
    const dateList: Date[] = []

    //Date Generator
    for (let i = 0; i < 7; i++) {
        dateList.push(new Date(presentDate.getFullYear(), presentDate.getMonth(), presentDate.getDate() - presentDate.getDay() + i))
    }

    const updateDate = (date: Date) => {
        if (dispatch !== null) {
            dispatch({type: APP_STATE_CONSTANTS.selectedDate, payload: date})
        }
    }

    // Element Generator
    const generateNavBarDate = () => {
        return dateList.map((date) => {
            return (
                <div
                    key={date.getDay()}
                    className={"NavBarElement col" + (presentDate.getDate() === date.getDate() ? " NavBarElementToday" : "")}
                    onClick={() => {
                        updateDate(date)
                    }}>
                    {days[date.getDay()].slice(0, 3)}
                    <br/>
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