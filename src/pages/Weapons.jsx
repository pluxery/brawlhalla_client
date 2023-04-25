import React from 'react';
import WeaponItem from "../components/WeaponItem/WeaponItem";
import '../styles/Weapons.css'

const Weapons = () => {
    return (<>
            <h1>Weapons:</h1>
            <div className={'weapons__wrapper'}>
                <WeaponItem/>
                {Array(30).fill(1).map(() => {
                    return <WeaponItem/>;
                })}
            </div>
        </>
    );
};

export default Weapons;