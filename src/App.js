import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./router/AppRouter";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
