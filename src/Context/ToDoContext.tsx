import {TODO_STATE_CONSTANTS} from "../Constants/CONSTANTS.ts";
import React, {createContext, ReactNode, useReducer} from "react";
import axios from "axios";

interface Action {
    type: string,
    // eslint-disable-next-line
    payload: any
}

interface Tasks {
    date: Date,
    toDo: string[]
}

interface State {
    tasks: Tasks | null
}

const initialState: State = {
    tasks: {date: new Date(), toDo: ["hello", "hi there", "how you Doing", "do Something", "how r u", "todo enter here"]}
}

function TodoStateFunction(state: State, action: Action): State {
    switch (action.type) {
        case TODO_STATE_CONSTANTS.todoList:
            axios
                .post("", action.payload)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            return state
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