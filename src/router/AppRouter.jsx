import {Routes, Route} from 'react-router-dom';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PostIndex from "../pages/Post/PostIndex";
import News from "../pages/News/News";
import About from "../pages/About";
import Legends from "../pages/Legend/Legends";
import Weapons from "../pages/Weapon/Weapons";
import CreatePost from "../pages/Post/CreatePost";
import PostEdit from "../pages/Post/PostEdit";
import MyProfile from "../pages/Profile/MyProfile";
import AuthPage from "../pages/Auth/AuthPage";
import PostShow from "../pages/Post/PostShow";
import Layout from "../Layout/Layout";
import MyPosts from "../pages/Profile/Components/MyPosts";
import OtherProfile from "../pages/Profile/OtherProfile";


export const useRoutes = (isAuthenticated) => {
    if (false) {
        return null;//ADMIN ROUTES
    }
    if (isAuthenticated) {
        return (
            <Routes>

                <Route path={'/'} element={<Layout children={<PostIndex/>}/>}/>
                <Route path={'/profile'} element={<Layout children={<MyProfile/>}/>}/>
                <Route path={'/profile/posts'} element={<Layout children={<MyProfile children={<MyPosts/>}/>}/>}/>

                <Route path={'/profile/:id'} element={<Layout children={<OtherProfile/>}/>}/>

                <Route path={'/posts'} element={<Layout children={<PostIndex/>}/>}/>
                <Route path={'/posts/:id'} element={<Layout children={<PostShow/>}/>}/>
                <Route path={'/posts/create'} element={<Layout children={<CreatePost/>}/>}/>
                <Route path={'/posts/:id/edit'} element={<Layout children={<PostEdit/>}/>}/>
                <Route path={'/news'} element={<Layout children={<News/>}/>}/>
                <Route path={'/legends'} element={<Layout children={<Legends/>}/>}/>
                <Route path={'/weapons'} element={<Layout children={<Weapons/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>

            </Routes>

        )
    } else {//GUEST ROUTES
        return (
            <Routes>
                <Route path={'/'} element={<AuthPage/>}/>
                <Route path={'/posts'} element={<Layout children={<PostIndex/>}/>}/>
                <Route path={'/posts/:id'} element={<Layout children={<PostShow/>}/>}/>
                <Route path={'/news'} element={<Layout children={<News/>}/>}/>
                <Route path={'/legends'} element={<Layout children={<Legends/>}/>}/>
                <Route path={'/weapons'} element={<Layout children={<Weapons/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>
            </Routes>

        )

    }
}

