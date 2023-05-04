import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./router/AppRouter";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";


function App() {
    const {token, login, logout} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <>
            <AuthContext.Provider value={{
                token, login, logout, isAuthenticated
            }}>
                <BrowserRouter >
                    {routes}
                </BrowserRouter >
            </AuthContext.Provider>
        </>
    );

}

export default App;
