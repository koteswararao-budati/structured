import styles from './css/App.module.css'
import {AppRenderContext} from "./Context/AppRenderContext.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import TodoTasks from "./Components/TodoTasks/TodoTasks.tsx";
import {ToDoContext} from "./Context/ToDoContext.tsx";
import Schedule from "./Components/Schedule/Schedule.tsx";

function App() {
    document.title = "Structured";
    return (
        <div className={styles.mainApp}>
            <AppRenderContext>
                <ToDoContext>
                    <Navigation/>
                    <div className={styles.mainBody}>
                        <TodoTasks/>
                        <Schedule/>
                    </div>
                </ToDoContext>
            </AppRenderContext>
        </div>
    )
}

export default App
