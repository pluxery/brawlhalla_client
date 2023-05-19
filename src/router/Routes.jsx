import {Routes, Route} from 'react-router-dom';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import IndexPost from "../pages/Post/IndexPost";
import News from "../pages/News/News";
import About from "../pages/About";
import IndexLegend from "../pages/Legend/IndexLegend";
import IndexWeapon from "../pages/Weapon/IndexWeapon";
import CreatePost from "../pages/Post/CreatePost";
import EditPost from "../pages/Post/EditPost";
import Profile from "../pages/Profile/Profile";
import AuthPage from "../pages/Auth/AuthPage";
import ShowPost from "../pages/Post/ShowPost";
import Layout from "../Layout/Layout";
import ShowWeapon from "../pages/Weapon/ShowWeapon";
import Subscriptions from "../pages/Profile/components/Subscriptions";
import ProfileAbout from "../pages/Profile/components/ProfileAbout";
import ProfilePostList from "../pages/Profile/components/ProfilePostList";
import React from "react";
import LikedPosts from "../pages/Profile/components/LikedPosts";
import EditProfile from "../pages/Profile/EditProfile";
import ShowLegend from "../pages/Legend/ShowLegend";



export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path={'/'} element={<Layout children={<IndexPost/>}/>}/>

                <Route path={'/profile/:id'} element={<Layout children={<Profile children={<ProfilePostList/>}/>}/>}/>
                <Route path={'/profile/edit'} element={<Layout children={<EditProfile/>}/>}/>
                <Route path={'/profile/:id/subscriptions'} element={<Layout children={<Profile children={<Subscriptions/>}/>}/>}/>
                <Route path={'/profile/:id/about'} element={<Layout children={<Profile children={<ProfileAbout/>}/>}/>}/>
                <Route path={'/profile/:id/liked'} element={<Layout children={<Profile children={<LikedPosts/>}/>}/>}/>



                <Route path={'/posts'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/search/category/:category'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/search/author/:author'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/search/tag/:tag'} element={<Layout children={<IndexPost/>}/>}/>

                <Route path={'/posts/:id'} element={<Layout children={<ShowPost/>}/>}/>
                <Route path={'/posts/create'} element={<Layout children={<CreatePost/>}/>}/>
                <Route path={'/posts/:id/edit'} element={<Layout children={<EditPost/>}/>}/>
                <Route path={'/posts/:id/delete'} element={<Layout children={<EditPost/>}/>}/>
                <Route path={'/news'} element={<Layout children={<News/>}/>}/>

                <Route path={'/legends'} element={<Layout children={<IndexLegend/>}/>}/>
                <Route path={'/legends/:id'} element={<Layout children={<ShowLegend/>}/>}/>

                <Route path={'/weapons'} element={<Layout children={<IndexWeapon/>}/>}/>
                <Route path={'/weapons/:id'} element={<Layout children={<ShowWeapon/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>



            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path={'/'} element={<AuthPage/>}/>

                <Route path={'/profile/:id'} element={<Layout children={<Profile children={<ProfilePostList/>}/>}/>}/>
                <Route path={'/profile/:id/subscriptions'} element={<Layout children={<Profile children={<Subscriptions/>}/>}/>}/>
                <Route path={'/profile/:id/about'} element={<Layout children={<Profile children={<ProfileAbout/>}/>}/>}/>

                <Route path={'/posts'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/search/category/:category'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/search/author/:author'} element={<Layout children={<IndexPost/>}/>}/>
                <Route path={'/posts/:id'} element={<Layout children={<ShowPost/>}/>}/>

                <Route path={'/news'} element={<Layout children={<News/>}/>}/>

                <Route path={'/legends'} element={<Layout children={<IndexLegend/>}/>}/>
                <Route path={'/legends/:id'} element={<Layout children={<ShowLegend/>}/>}/>

                <Route path={'/weapons'} element={<Layout children={<IndexWeapon/>}/>}/>
                <Route path={'/weapons/:id'} element={<Layout children={<ShowWeapon/>}/>}/>
                <Route path={'/about'} element={<Layout children={<About/>}/>}/>
            </Routes>

        )

    }
}

