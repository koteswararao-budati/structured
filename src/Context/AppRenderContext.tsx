import React, {createContext, ReactNode, useReducer} from "react";
import {APP_STATE_CONSTANTS} from "../Constants/CONSTANTS.ts";

interface Action {
    type: string,
    // eslint-disable-next-line
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
    displayCalendar: false
}

export function AppStateFunction(state: State, action: Action) {
    switch (action.type) {
        case APP_STATE_CONSTANTS.calendarDate:
            return {...state, calendarDate: action.payload}
        case APP_STATE_CONSTANTS.currentWeek:
            // eslint-disable-next-line no-case-declarations
            const currentWeek = state.currentWeek + action.payload
            // eslint-disable-next-line no-case-declarations
            const {selectedDate} = state
            // eslint-disable-next-line no-case-declarations
            const updateSelectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + action.payload)
            console.log(updateSelectedDate)
            return {
                ...state, currentWeek: currentWeek,
                selectedDate: updateSelectedDate
            }
        case APP_STATE_CONSTANTS.selectedDate:
            return {...state, selectedDate: action.payload}
        case APP_STATE_CONSTANTS.calendarDisplay:
            return {...state, displayCalendar: action.payload}
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