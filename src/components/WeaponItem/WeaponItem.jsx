import React from 'react';
import './Weapon.css'

const WeaponItem = () => {
    return (
        <div className={'weapon__wrapper'}>
            <div className={'weapon__img_wrapper'}>
                <img src={''} alt={'icon'}/>
            </div>
            <h4>weapon</h4>
        </div>
    );
};

export default WeaponItem;