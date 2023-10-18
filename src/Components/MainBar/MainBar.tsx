import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";
import "./MainBar.css"
import calendarIcon from "../../assets/calendar.svg";
import {MONTHS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

function MainBar() {

    const appContext = useContext(AppRenderState)
    console.log(appContext)
    const state = appContext.state
    const dispatch = appContext.dispatch
    // variables declaration
    const months = MONTHS
    const date = state.selectedDate

    // update week on
    const updateWeek = (num: number) => {
        const date = state.selectedDate
        dispatch(state, {type: "CURRENT_WEEK", payload: state.currentWeek + num})
        dispatch(state, {
            type: "SELECTED_DATE",
            payload: new Date(date.getFullYear(), date.getMonth(), date.getDate() + num)
        })
    }
    return (
        <header className={"main"}>
            <div className={"left-elements"}>
                <button className={"button btn btn-light"} onClick={() => updateWeek(-7)}><b><img src={left}
                                                                                                  alt={"left"}/></b>
                </button>
                <div className={"month"}>
                    {months[date.getMonth()]} {date.getFullYear()}
                </div>
                <button className={"button btn btn-light"} onClick={() => updateWeek(+7)}><b><img src={right}
                                                                                                  alt={"right"}/></b>
                </button>
            </div>
            <div className={""}>
                <button className={"button calendar btn btn-light"}
                        onClick={() => dispatch(state, {
                            type: "CALENDAR_DISPLAY",
                            payload: !state.displayCalendar
                        })}>
                    <img src={calendarIcon} alt={""}/>
                </button>
            </div>
        </header>
    )
}

export default MainBar;