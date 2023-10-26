import TodoForm from "../TodoForm/TodoForm.tsx";
import {useContext} from "react";
import TodoGenerator from "./TodoGenerator.tsx";
import BodyHeader from "./BodyHeader.tsx";
import {APP_STATE_CONSTANTS} from "../../Constants/CONSTANTS.ts";
import {AppRenderState} from "../../Context/AppRenderContext.tsx";

function TodoTasks() {
    const {state} = useContext(AppRenderState)

    const action = {
        type: APP_STATE_CONSTANTS.todoTaskForm,
        payload: true
    }

    return (
        <>
            {state.todoTaskForm && <TodoForm/>}
            <BodyHeader text={"Todo Tasks"} action={action}/>
            <TodoGenerator/>
        </>
    )
}

export default TodoTasks;