import styles from "./css/Body.module.css";
import TodoTasks from "./Components/TodoTasks/TodoTasks.tsx";
import Schedule from "./Components/Schedule/Schedule.tsx";
import {useContext} from "react";
import {AppRenderState} from "./Context/AppRenderContext.tsx";

function Body() {
    const {displayTodo} = useContext(AppRenderState).state

    return (
        <div className={styles.mainBody}>
            {displayTodo ? <TodoTasks/> : <Schedule/>}
        </div>
    )
}

export default Body;