import React from 'react';
import BhLink from "../../components/UI/link/BhLink";
import '../../styles/Profile.css'
const Profile = () => {
    return (
        <div className={'profile__wrapper'}>

            <div className={'profile__img_body'}>
                <img src={''} alt={'avatar'}/>
            </div>
             <div className={'profile__text_body'}>
                 <p>name</p>
                 <p>elo: 9999</p>
                 <p>my posts</p>
             </div>
        </div>
    );
};

export default Profile;