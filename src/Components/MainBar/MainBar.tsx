import "./MainBar.css"
import calendarIcon from "../../assets/calendar.svg";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";
import LeftElements from "./LeftElements.tsx";

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


    return (
        <div className={"main"}>
            <LeftElements/>
            <div>
                <button className={"button calendar btn btn-light"}
                        onClick={updateCalendarDate}>
                    <img src={calendarIcon} alt={""}/>
                </button>
            </div>
        </div>
    )
}

export default MainBar;