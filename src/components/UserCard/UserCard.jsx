import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import {AuthContext} from "../../context/AuthContext";
import {API_URI, useHttp} from "../../hooks/http.hook";
import axios from "axios";

const UserCard = ({user}) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {id} = useParams()

    const unsubscriptionOnClick = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`${API_URI}/subscriptions/${user.subscription_id}/delete`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                })
            navigate(`/profile/${auth.user.id}/subscriptions`)
        } catch (e) {
            console.log(e.message)
        }
    }

    // useEffect(()=>{
    //
    // }, [])
    return (
        <div className="card mb-3" style={{maxWidth: 440}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm"
                        className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <div className={'row'}>
                            <NavLink to={`/profile/${user.subscription_id}`} className={'btn btn-success'}>
                                Открыть профиль
                            </NavLink>

                            {auth.user.id == id ?
                                <Button className={'btn-danger mt-2'}
                                        onClick={unsubscriptionOnClick}>
                                    Отписаться
                                </Button>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;