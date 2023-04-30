import React from 'react';
import '../../styles/Start.css';
import fon from '../../images/fon.jpg'

const StartPage = () => {
    return (
        <div className="start">
            <div className="start_img">
            <img src={fon} alt='phone'/>
            </div>
        </div>
    );
};

export default StartPage;