import React from 'react';
import BhLink from "../../components/UI/link/BhLink";
import '../../styles/Profile.css'
import BhButton from "../../components/UI/button/BhButton";
const Profile = () => {
    return (
        <div className={'profile__wrapper'}>

            <div className={'profile__img_body'}>
                <img src={''} alt={'avatar'}/>
            </div>
            <BhButton>change avatar</BhButton>
            <BhButton>Edit profile</BhButton>
             <div className={'profile__text_body'}>
                 <p>name</p>
                 <p>elo: 9999</p>
                 <BhButton>my posts</BhButton>
             </div>

            <div>
                <h4>comments: </h4>
            </div>
        </div>
    );
};

export default Profile;