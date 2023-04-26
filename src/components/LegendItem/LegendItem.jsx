import React from 'react';
import './Legend.css'
const LegendItem = () => {
    return (
        <div className={'legend__wrapper'}>
            <div className={'legend__img_wrapper'}>
                <img src={''} alt={'avatar'}/>
            </div>
            <p>full name</p>
        </div>
    );
};

export default LegendItem;