import './css/App.css'
import {AppRenderContext} from "./Context/AppRenderContext.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import TopTasks from "./Components/TopTasks/TopTasks.tsx";
import TopTaskForm from "./Components/TopTaskForm/TopTaskForm.tsx";

function App() {
    return (
        <div className={"main-app"}>
            <AppRenderContext>
                <Navigation/>
                <TopTasks/>
                <TopTaskForm/>
            </AppRenderContext>
        </div>
    )
}

export default App
