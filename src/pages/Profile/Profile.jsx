import React, { useContext, useEffect, useState } from 'react';
import '../../styles/Profile.css'
import { Button } from 'react-bootstrap';
import { NavLink, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../context/AuthContext";

import UnauthorizedAlert from "../../components/Alerts/UnauthorizedAlert";
import UserService from '../../API/UserService';
import { Avatar } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';

const Profile = ({ children }) => {

    const { id } = useParams()
    const [user, setUser] = useState({});
    const auth = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(true)
    const [isSubscribed, setIsSubscribed] = useState(false)

    const subscriptionOnClick = async (e) => {
        e.preventDefault()
        await UserService.subscribe(id, auth.token)
        setIsSubscribed(true)
    }

    const unsubscriptionOnClick = async (e) => {
        e.preventDefault()
        await UserService.unsubscribe(user.id, auth.token)
        setIsSubscribed(false)
    }


    useEffect(() => {
        try {
            UserService.getUserById(id, auth.token)
                .then(r => {
                    setUser(r.data.data)
                    setIsLoading(false)
                });
        } catch (e) {

        }
    }, [id, setUser, setIsSubscribed, setIsLoading, auth.token]);


    return (<>
        {!auth.isAuthenticated ? <UnauthorizedAlert /> : null}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="content" className="content content-full-width">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-cover"></div>
                                <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={user.avatar}
                                            sx={{ width: 110, height: 110 }} />

                                    </div>
                                    <div className="profile-header-info">
                                        {isLoading ? <>
                                            <h4 className="m-t-10 m-b-5">
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"></span>
                                                {" "} загрузка</h4>
                                            <p className="m-b-10">
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"></span>
                                                <MailIcon />
                                                {" "}загрузка</p>

                                            <p className="m-b-10">
                                                <Avatar
                                                    src="\Steam_icon_logo.svg.png"
                                                    sx={{ width: 25, height: 25 }}
                                                />
                                                загрузка
                                                <span
                                                    className="spinner-border spinner-border-sm"
                                                    role="status"
                                                    aria-hidden="true"></span></p>

                                        </>
                                            : <>
                                                <h4 className="m-t-10 m-b-5">{user.name}</h4>
                                                <p className="m-b-10"><MailIcon /> {user.email}</p>
                                                <div className="m-b-10">


                                                    {user.steam_link ?
                                                        <>

                                                            <Button
                                                            className='btn-blue-gradient mb-2'
                                                            target="_blank"
                                                             href={`https://steamcommunity.com/profiles/${user.steam_link}`}>
                                                            <img src="\steam_white_icon.png"
                                                                    style={{ width: 25, height: 25 }} />
                                                                {" "}steam профиль
                                                               
                                                            </Button>

                                                        </>
                                                        : null}
                                                </div>
                                            </>}
                                        {isLoading ? <button className="btn btn-success" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status"
                                                aria-hidden="true"></span>
                                            Loading...
                                        </button> : user.id === auth.user.id ?
                                            <NavLink to={'/profile/edit'} className=" btn btn-success">
                                                <EditIcon />
                                                Редактировать
                                            </NavLink> :
                                            auth.isAuthenticated ? <>
                                                {isSubscribed ? <Button className="btn-danger"
                                                    onClick={unsubscriptionOnClick}>Отписаться</Button> :
                                                    <Button className="btn-success"
                                                        onClick={subscriptionOnClick}>Подписаться</Button>}
                                            </> : null}

                                    </div>
                                </div>
                                <ul className="profile-header-tab nav nav-tabs">
                                    <li className="nav-item">
                                        <NavLink className="nav-link_"
                                            to={`/profile/${user.id}`}>
                                            Мои посты
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link_"
                                            to={`/profile/${user.id}/subscriptions`}>
                                            Подписки
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link_"
                                            to={`/profile/${user.id}/liked`}>
                                            Понравившиеся посты
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link_"
                                            to={`/profile/${user.id}/about`}>
                                            Обо мне
                                        </NavLink>
                                    </li>

                                    
                                    <li className="nav-item">
                                        <NavLink className="nav-link_"
                                            to={`/profile/${user.id}/legends`}>
                                            Любимые легенды
                                        </NavLink>
                                    </li>

                                </ul>

                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default Profile;