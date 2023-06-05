import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import SubscriptionCard from "../../../components/SubscriptionCard/SubscriptionCard";
import UserService from '../../../API/UserService';
import EmptyDataAlert from "../../../components/Alerts/EmptyDataAlert";
import LoaderCross from "../../../components/Loader/LoaderCross";

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
                <LoaderCross/>
                :
                subscriptions.length !== 0 ?
                    subscriptions.map((item) => {
                        return <SubscriptionCard user={item}/>
                    }) :

                    <EmptyDataAlert text={ "Подписки отсутствует"}/>
            }
        </>
    );

};

export default Subscriptions;