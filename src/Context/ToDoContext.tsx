import {TODO_STATE_CONSTANTS} from "../Constants/CONSTANTS.ts";
import React, {createContext, ReactNode, useReducer} from "react";

interface Action {
    type: string,
    // eslint-disable-next-line
    payload: any
}


type State = {
    action: string,
    flag: string,
    status: string
}[]


function TodoStateFunction(state: State, action: Action): State {
    switch (action.type) {
        case TODO_STATE_CONSTANTS.todoList:
            console.log(action)
            // axios
            //     .post("", action.payload)
            //     .then(res => console.log(res))
            //     .catch(err => console.log(err))
            if (state !== null || action.payload.action !== "") {
                return [...state, action.payload]
            } else if (action.payload.action === "") {
                return state
            }
            return [action.payload]
        default:
            return state
    }
}

export const TodoTasksContext = createContext<
    { state: State, dispatch: React.Dispatch<Action> } | { state: null, dispatch: null }>({
    state: null,
    dispatch: null
})


export function ToDoContext({children}: { children: ReactNode }) {
    const [state, dispatch] = useReducer(TodoStateFunction, [{action: "", flag: "", status: ""}])

    return (
        <TodoTasksContext.Provider value={{state, dispatch}}>
            {children}
        </TodoTasksContext.Provider>
    )
}