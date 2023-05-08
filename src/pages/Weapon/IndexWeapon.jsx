import React, {useContext, useEffect, useState} from 'react';
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import '../../styles/Weapons.css'
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";

const IndexWeapon = () => {

    const [weapons, setWeapons] = useState([]);
    const {request, loading} = useHttp()

    useEffect(() => {
        async function getAllWeapons() {
            return await request('/weapons')
        }

        getAllWeapons().then(r => setWeapons(r.data))
    }, [request, setWeapons]);
    if (loading) {
        return <Loader/>
    } else {
        return (<>
                <h1>Weapons:</h1>
                <div className={'weapons__wrapper'}>
                    {weapons.map((item) => {
                        return <WeaponCard weapon={item} key={item.id}/>;
                    })}
                </div>
            </>
        );
    }
};

export default IndexWeapon;