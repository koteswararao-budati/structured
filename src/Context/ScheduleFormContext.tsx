import {ScheduleFormInterface} from "../Constants/INTERFACES.ts";
import React, {createContext, ReactNode, useReducer} from "react";
import {SCHEDULE_FORM_CONSTANTS} from "../Constants/CONSTANTS.ts";

type Action = {
    type: string,
    // eslint-disable-next-line
    payload: any
}

const initialState: ScheduleFormInterface = {
    time: new Date(),
    inputTask: "",
    duration: 15,
    color: "",
    recursion: 0,
    notification: []
}


function setState(state: ScheduleFormInterface, action: Action) {
    switch (action.type) {
        case SCHEDULE_FORM_CONSTANTS.time:
            return {...state, time: action.payload}
        case SCHEDULE_FORM_CONSTANTS.duration:
            return {...state, duration: action.payload}
        case SCHEDULE_FORM_CONSTANTS.recursion:
            return {...state, recursion: action.payload}
        default:
            return state
    }
}

export const ScheduleFormContextApi = createContext<{
        state: ScheduleFormInterface
        dispatchScheduleForm: React.Dispatch<Action>
    }
    | {
    state: ScheduleFormInterface,
    dispatchScheduleForm: null
}>({state: initialState, dispatchScheduleForm: null})

export function ScheduleFormContext({children}: {
    children: ReactNode
}) {
    const [state, dispatchScheduleForm] = useReducer(setState, initialState)
    return (
        <ScheduleFormContextApi.Provider value={{state, dispatchScheduleForm}}>
            {children}
        </ScheduleFormContextApi.Provider>
    )
}
