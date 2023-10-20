import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";
import {APP_STATE_CONSTANTS, MONTHS} from "../../Constants/CONSTANTS.ts";
import {useContext} from "react";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

export default function LeftElements() {

    const {state, dispatch} = useContext(AppRenderState)

    // variables declaration
    const months = MONTHS
    const date = state.selectedDate

    // update week on global AppRenderState
    const updateWeek = (num: number) => {
        if (dispatch !== null) {
            dispatch({type: APP_STATE_CONSTANTS.currentWeek, payload: num})
        }
    }
    return (
        <div className={"left-elements"}>
            <button className={"button btn btn-light"} onClick={() => updateWeek(-7)}><b><img src={left}
                                                                                              alt={"left"}/></b>
            </button>
            <div className={"month"}>
                {months[date.getMonth()]} {date.getFullYear()}
            </div>
            <div>
                <button className={"button btn btn-light"} onClick={() => updateWeek(+7)}><b><img src={right}
                                                                                                  alt={"right"}/></b>
                </button>
            </div>
        </div>
    )
}