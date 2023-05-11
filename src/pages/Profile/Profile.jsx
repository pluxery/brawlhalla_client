import React, {useContext, useEffect, useState} from 'react';
import '../../styles/Profile.css'
import {API_URI, useHttp} from "../../hooks/http.hook";
import {Button} from 'react-bootstrap';
import {NavLink, useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


const Profile = ({children}) => {

    const {request, loading} = useHttp()
    const {id} = useParams()
    const [user, setUser] = useState({});
    const auth = useContext(AuthContext)

    const [IsSubscribtioned, setIsSubscribtioned] = useState(false)

    const subscriptionOnClick = async (e) => {
        e.preventDefault()
        try {
            await request(`/subscriptions/${user.id}/add`)
            setIsSubscribtioned(true)
        } catch (e) {
            console.log(e.message)
        }
    }

    const unsubscriptionOnClick = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`${API_URI}/subscriptions/${user.id}/delete`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            setIsSubscribtioned(false)
        } catch (e) {
            console.log(e.message)
        }
    }


    useEffect(() => {
            async function getUserProfile() {
                try {
                    return await request(`/users/${id}`)
                } catch (e) {
                    console.log(e.message)
                }
            }

            getUserProfile().then(result => setUser(result.data))
        },
        [id, request, setUser, setIsSubscribtioned]);

    if (loading) {
        return <Loader/>
    } else {
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
                                                <img
                                                    src="https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm"
                                                    alt=""/>
                                            </div>
                                            <div className="profile-header-info">
                                                <h4 className="m-t-10 m-b-5">{user.name}</h4>
                                                <p className="m-b-10">{user.email}</p>
                                                {user.id === auth.user.id ?
                                                    <Button className="btn-success">Редактировать профиль</Button> :
                                                    <>
                                                        {IsSubscribtioned ?
                                                            <Button className="btn-danger"
                                                                    onClick={unsubscriptionOnClick}>Отписаться</Button> :
                                                            <Button className="btn-success"
                                                                    onClick={subscriptionOnClick}>Подписаться</Button>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        <ul className="profile-header-tab nav nav-tabs">
                                            <li className="nav-item">
                                                <NavLink className="nav-link_"
                                                         to={`/profile/${user.id}`}>
                                                    Мои записи
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
            </>
        );
    }
};

export default Profile;