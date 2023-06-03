import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SubscriptionCard from "../../../components/SubscriptionCard/SubscriptionCard";
import UserService from '../../../API/UserService';

const Subscriptions = () => {
    const {id} = useParams()
    const [subscriptions, setSubscriptions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        UserService.getSubscriptions(id)
            .then(r => {
                setSubscriptions(r.data)
                setIsLoading(false)
            })
    }, [id, setSubscriptions])

    return (
        <>
            {isLoading ?
                <div className="mt-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                subscriptions.length !== 0 ?
                    subscriptions.map((item) => {
                        return <SubscriptionCard user={item}/>
                    }) :
                    <h3>У вас нет подписок</h3>
            }
        </>
    );

};

export default Subscriptions;