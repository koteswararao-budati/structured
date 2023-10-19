import './css/App.css'
import {AppRenderContext} from "./Context/AppRenderContext.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import TodoTasks from "./Components/TodoTasks/TodoTasks.tsx";
import {ToDoContext} from "./Context/ToDoContext.tsx";

function App() {
    return (
        <div className={"main-app"}>
            <AppRenderContext>
                <ToDoContext>
                    <Navigation/>
                    <TodoTasks/>
                </ToDoContext>
            </AppRenderContext>
        </div>
    )
}

export default App
