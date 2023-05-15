import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SubscriptionCard from "../../../components/SubscriptionCard/SubscriptionCard";
import UserService from '../../../API/UserService';

const Subscriptions = () => {
    const { id } = useParams()
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        UserService.getSubscriptions(id).then(r => setSubscriptions(r))
    }, [id, setSubscriptions])

    return (
        <>
            {subscriptions?.map((item) => {
                return <SubscriptionCard user={item} />
            })}
        </>
    );

};

export default Subscriptions;