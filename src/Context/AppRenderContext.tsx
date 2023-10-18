import React, {createContext, ReactNode, useReducer} from "react";

interface Action {
    type: "CALENDAR_DATE" | "CURRENT_WEEK" | "CALENDAR_DISPLAY" | "SELECTED_DATE",
    payload: any
}

export interface State {
    todayDate: Date,
    selectedDate: Date,
    calendarDate: Date,
    currentWeek: number,
    displayCalendar: boolean
}

const initialState: State = {
    todayDate: new Date(),
    selectedDate: new Date(),
    calendarDate: new Date(),
    currentWeek: 0,
    displayCalendar: true
}

export function AppStateFunction(state: State, action: Action) {
    console.log(action)
    switch (action.type) {
        case "CALENDAR_DATE":
            return {...state, calenderDate: action.payload}
        case "CURRENT_WEEK":
            return {...state, currentWeek: action.payload}
        case "SELECTED_DATE":
            return {...state, selectedDate: action.payload}
        case "CALENDAR_DISPLAY":
            return {...state, displayCalender: action.payload}
        default:
            return state
    }
}

export const AppRenderState = createContext<{
        state: State
        dispatch: React.Dispatch<Action>
    }
    | {
    state: State,
    dispatch: null
}>({state: initialState, dispatch: null})

export function AppRenderContext({children}: {
    children: ReactNode
}) {
    const [state, dispatch] = useReducer(AppStateFunction, initialState)
    return (
        <AppRenderState.Provider value={{state, dispatch}}>
            {children}
        </AppRenderState.Provider>
    )
}