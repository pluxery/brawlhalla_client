import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import LoaderCross from "../../components/Loader/LoaderCross";
import RipAlert from '../../components/Alerts/RipAlert';
const ShowWeapon = () => {
    const { id } = useParams()
    const { request } = useHttp()
    const [weapon, setWeapon] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getWeaponById() {
            return await request(`/weapons/${id}`)
        }

        getWeaponById().then(r => {
            setWeapon(r.data)
            setLoading(false)
        })
    }, [id, request])

    if (loading) {
        return <LoaderCross />
    } else {
        return (
                <RipAlert text={"Coming soon!"} />

        );
    }
};

export default ShowWeapon;