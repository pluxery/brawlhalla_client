import React, {useContext, useEffect, useState} from 'react';
import WeaponItem from "../../components/WeaponItem/WeaponItem";
import '../../styles/Weapons.css'
import {AuthContext} from "../../context/AuthContext";
import PostService from "../../API/PostService";
import WeaponService from "../../API/WeaponService";

const Weapons = () => {

    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        WeaponService.getAllWeapons().then(r => setWeapons(r.data))
    }, [setWeapons]);

    return (<>
            <h1>Weapons:</h1>
            <div className={'weapons__wrapper'}>
                <WeaponItem/>
                {weapons.map((item) => {
                    {console.log(item)}
                    return <WeaponItem weapon={item} key={item.id}/>;
                })}
            </div>
        </>
    );
};

export default Weapons;