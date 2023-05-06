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
import Layout from "../Layout/Layout";


export const useRoutes = (isAuthenticated) => {
    if (false) {
        return null;//ADMIN ROUTES
    }
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>

                <Route path={'/posts'} element={<Layout children={<Posts/>}/>}/>
                <Route path={'/posts/:id'} element={<Layout children={<Post/>}/>}/>
                <Route path={'/posts/create'} element={<Layout children={<CreatePost/>}/>}/>
                <Route path={'/posts/:id/edit'} element={<Layout children={<EditPost/>}/>}/>

                <Route path={'/news'} element={<Layout children={<News/>}/>}/>
                <Route path={'/legends'} element={<Layout children={<Legends/>}/>}/>
                <Route path={'/weapons'} element={<Layout children={<Weapons/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>

            </Routes>

        )
    } else {//GUEST ROUTES
        return (
            <Routes>
                <Route path={'/'} element={<StartPage/>}/>
                <Route path={'/posts'} element={<Layout children={<Posts/>}/>}/>
                <Route path={'/posts/:id'} element={<Layout children={<Post/>}/>}/>
                <Route path={'/news'} element={<Layout children={<News/>}/>}/>
                <Route path={'/legends'} element={<Layout children={<Legends/>}/>}/>
                <Route path={'/weapons'} element={<Layout children={<Weapons/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>
            </Routes>

        )

    }
}

