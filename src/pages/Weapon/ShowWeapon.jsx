import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";

const ShowWeapon = () => {
    const {id} = useParams()
    const {request, loading} = useHttp()
    const [weapon, setWeapon] = useState({})
    useEffect(() => {
        async function getWeaponById() {
            return await request(`/weapons/${id}`)
        }

        getWeaponById().then(r => setWeapon(r.data))
    }, [id, request])

    if (loading) {
        return <Loader/>
    } else {
        return (
            <div>
                <h1>weapon = {weapon.name}</h1>
            </div>
        );
    }
};

export default ShowWeapon;