import React, {useContext, useEffect, useState} from 'react';
import '../../styles/Profile.css'
import BhButton from "../../components/UI/button/BhButton";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const Profile = () => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                return await request('http://127.0.0.1:8000/api/auth/me', 'POST')
            } catch (e) {
            }
        }

        fetchData().then(result => setUser(result))
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
                                            <NavLink target="__blank" className="nav-link_" to={'/'}>Мои записи</NavLink>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Profile;