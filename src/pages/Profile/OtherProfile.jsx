import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import PostService from "../../API/PostService";
import UserService from "../../API/UserService";
import {Button} from "react-bootstrap";

const OtherProfile = () => {
    const params = useParams();
    const userId = params.id;
    const [user, setUser] = useState({});

    useEffect(() => {
        UserService.getUserById(userId).then(r => setUser(r.data))
    }, [setUser]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="content" className="content content-full-width">
                            <div className="profile">
                                <div className="profile-header">
                                    <div className="profile-header-cover"></div>
                                    <div className="profile-header-content">
                                        <div className="profile-header-img">
                                            <img src="https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm" alt=""/>
                                        </div>
                                        <div className="profile-header-info">
                                            <h4 className="m-t-10 m-b-5">{user.name}</h4>
                                            <p className="m-b-10">{user.email}</p>
                                            <Button href="#" className="btn-success">Edit Profile</Button>
                                        </div>

                                    </div>
                                    <ul className="profile-header-tab nav nav-tabs">
                                        <li className="nav-item">
                                            <NavLink target="__blank" className="nav-link_" to={'/profile/posts'}>Мои записи</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink target="__blank" className="nav-link_" to={'/'}>Друзья</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink target="__blank" className="nav-link_" to={'/'}>Обо мне</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink target="__blank" className="nav-link_" to={'/'}>Что-то еще</NavLink>
                                        </li>
                                    </ul>

                                </div>

                                <h1>children</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherProfile;