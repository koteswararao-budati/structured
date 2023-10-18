import './css/App.css'
import {AppRenderContext} from "./Context/AppRenderContext.tsx";
import Navigation from "./Components/Navigation/Navigation.tsx";

function App() {
    return (
        <div className={"main-app"}>
            <AppRenderContext>
                <Navigation/>
            </AppRenderContext>
        </div>
    )
}

export default App
