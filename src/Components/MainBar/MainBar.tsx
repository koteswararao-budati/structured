import "./MainBar.css"
import calendarIcon from "../../assets/calendar.svg";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import LeftElements from "./LeftElements.tsx";
import house from "../../assets/house.svg";

function MainBar() {

    const appContext = useContext(AppRenderState)
    const state = appContext.state
    const dispatch = appContext.dispatch

    const updateCalendarDate = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.calendarDisplay,
                payload: !state.displayCalendar
            })
        }
    }

    const updateHome = () => {
        if (dispatch !== null) {
            dispatch({
                type: APP_STATE_CONSTANTS.selectedDate,
                payload: state.todayDate
            })

            dispatch({
                type: APP_STATE_CONSTANTS.calendarDate,
                payload: state.todayDate
            })
        }
    }


    return (
        <div className={"main"}>
            <LeftElements/>
            <div>
                <button className={"home button btn btn-light"} onClick={updateHome}>
                    <img src={house} alt={"Home"}/>
                </button>
                <button className={"button calendar btn btn-light"}
                        onClick={updateCalendarDate}>
                    <img src={calendarIcon} alt={""}/>
                </button>
            </div>
        </div>
    )
}

export default MainBar;