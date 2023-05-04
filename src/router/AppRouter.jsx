import {Routes, Route} from 'react-router-dom';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Posts from "../pages/Post/Posts";
import News from "../pages/News";
import About from "../pages/About";
import Legends from "../pages/Legends";
import Weapons from "../pages/Weapons";
import CreatePost from "../pages/Post/CreatePost";
import EditPost from "../pages/Post/EditPost";
import Profile from "../pages/Profile/Profile";
import StartPage from "../pages/Auth/StartPage";
import Post from "../pages/Post/Post";


export const useRoutes = (isAuthenticated) => {
    if (false) {
        return null;//ADMIN ROUTES
    }
    if (isAuthenticated) {
        return (

            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/'} element={<StartPage/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<Post/>}/>
                <Route path={'/posts/create'} element={<CreatePost/>}/>
                <Route path={'/posts/:id/edit'} element={<EditPost/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/legends'} element={<Legends/>}/>
                <Route path={'/weapons'} element={<Weapons/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>

        )
    } else {//GUEST ROUTES
        return(

        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/about'} element={<About/>}/>
        </Routes>

    )

    }
}

