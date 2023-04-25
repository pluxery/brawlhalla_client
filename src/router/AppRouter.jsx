import {Routes, Route} from 'react-router-dom';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Posts from "../pages/Posts";
import News from "../pages/News";
import About from "../pages/About";
import Legends from "../pages/Legends";
import Weapons from "../pages/Weapons";

const AppRouter = () => {

    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>

            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/legends'} element={<Legends/>}/>
            <Route path={'/weapons'} element={<Weapons/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Routes>
    );
};

export default AppRouter;