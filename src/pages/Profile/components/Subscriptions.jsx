import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";
import Loader from "../../../components/Loader/Loader";
import UserCard from "../../../components/UserCard/UserCard";

const Subscriptions = () => {
    const {id} = useParams()
    const {request, loading} = useHttp()
    const [subscriptions, setSubscriptions] = useState([])

    useEffect(() => {
        async function getSubscriptions() {
            try {
                return await request(`/users/${id}/subscriptions`)
            } catch (e) {
                console.log(e.message)
            }
        }

        getSubscriptions().then(r => setSubscriptions(r))

    }, [id, request, setSubscriptions])

    if (loading) {
        return <Loader/>
    } else {
        return (
            <>
                {subscriptions?.map((item) => {
                    return <UserCard user={item}/>
                })}
            </>
        );
    }
};

export default Subscriptions;