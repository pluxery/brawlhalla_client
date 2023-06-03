import React, {useContext, useEffect, useState} from 'react';
import '../../styles/Profile.css'
import {Button} from 'react-bootstrap';
import {NavLink, useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {AuthContext} from "../../context/AuthContext";

import UnauthorizedAlert from "../../components/Alerts/UnauthorizedAlert";
import UserService from '../../API/UserService';
import {Avatar} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Profile = ({children}) => {

    const {id} = useParams()
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
        UserService.getUserById(id, auth.token)
            .then(r => {
                setUser(r.data)
                setIsLoading(false)
            });
    }, [id, setUser, setIsSubscribed, setIsLoading, auth.token]);


    return (<>
        {!auth.isAuthenticated ? <UnauthorizedAlert/> : null}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="content" className="content content-full-width">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-cover"></div>
                                <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <Avatar alt="Remy Sharp"
                                                src="https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm"
                                                sx={{width: 110, height: 110}}/>

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
                                                    <MailIcon/>
                                                    {" "}загрузка</p>
                                                <p className="m-b-10">
                                                    <span
                                                        className="spinner-border spinner-border-sm"
                                                        role="status"
                                                        aria-hidden="true"></span>
                                                    <PersonAddIcon/>
                                                    {" "}загрузка</p>
                                            </>
                                            : <>
                                                <h4 className="m-t-10 m-b-5">{user.name}</h4>
                                                <p className="m-b-10"> <MailIcon/> {user.email}</p>
                                                <p className="m-b-10"> <PersonAddIcon/> здесь будет ссылка на стим</p>
                                            </>}
                                        {isLoading ? <button className="btn btn-success" type="button" disabled>
                                                    <span className="spinner-border spinner-border-sm" role="status"
                                                          aria-hidden="true"></span>
                                            Loading...
                                        </button> : user.id === auth.user.id ?
                                            <NavLink to={'/profile/edit'} className=" btn btn-success">Редактировать
                                                профиль</NavLink> : <>
                                                {isSubscribed ? <Button className="btn-danger"
                                                                        onClick={unsubscriptionOnClick}>Отписаться</Button> :
                                                    <Button className="btn-success"
                                                            onClick={subscriptionOnClick}>Подписаться</Button>}
                                            </>}

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