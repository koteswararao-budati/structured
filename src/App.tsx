import styles from './css/App.module.css'
import {AppRenderContext} from "./Context/AppRenderContext.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";
import {ToDoContext} from "./Context/ToDoContext.tsx";
import Body from "./Body.tsx";

function App() {
    document.title = "Structured";
    return (
        <div className={styles.mainApp}>
            <AppRenderContext>
                <ToDoContext>
                    <Navigation/>
                    <h2>Hello there</h2>
                    <Body/>
                </ToDoContext>
            </AppRenderContext>
        </div>
    )
}

export default App
