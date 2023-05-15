import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import UserService from '../../API/UserService';

const SubscriptionCard = ({ user }) => {
    const auth = useContext(AuthContext)
    const { id } = useParams()
    const [isSubscribtioned, setIsSubscribtioned] = useState(true)

    const unsubscriptionOnClick = async (e) => {
        e.preventDefault()
        UserService.unsubscribe(user.subscription_id, auth.token)
        setIsSubscribtioned(false)
    }

    const subscriptionOnClick = async (e) => {
        e.preventDefault()
        UserService.subscribe(id, auth.token)
        setIsSubscribtioned(true)
    }
    return (
        <div className="card mb-3" style={{ maxWidth: 440 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src="https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm"
                        className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <div className={'row'}>
                            <NavLink to={`/profile/${user.subscription_id}`} className={'btn btn-success'}>
                                Открыть профиль
                            </NavLink>

                            {auth.user.id == id ?
                                <>
                                    {isSubscribtioned ?
                                        <Button className={'btn-danger mt-2'} onClick={unsubscriptionOnClick}>
                                            Отписаться
                                        </Button> :
                                        <Button className={'btn-success mt-2'} onClick={subscriptionOnClick}>
                                            Подписаться
                                        </Button>
                                    }
                                    </> 
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionCard;