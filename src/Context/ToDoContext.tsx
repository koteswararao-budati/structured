import {TODO_STATE_CONSTANTS} from "../Constants/CONSTANTS.ts";
import React, {createContext, ReactNode, useReducer} from "react";

interface Action {
    type: string,
    // eslint-disable-next-line
    payload: any
}

interface State {
    todoTask: boolean
}

const initialState: State = {
    todoTask: false
}

function TodoStateFunction(state: State, action: Action): State {
    console.log(action)
    switch (action.type) {
        case TODO_STATE_CONSTANTS.todoTask:
            return {...state, todoTask: action.payload}
        default:
            return state
    }
}

export const TodoTasksContext = createContext<
    { state: State, dispatch: React.Dispatch<Action> } | { state: State, dispatch: null }>({
    state: initialState,
    dispatch: null
})


export function ToDoContext({children}: { children: ReactNode }) {
    const [state, dispatch] = useReducer(TodoStateFunction, initialState)

    return (
        <TodoTasksContext.Provider value={{state, dispatch}}>
            {children}
        </TodoTasksContext.Provider>
    )
}