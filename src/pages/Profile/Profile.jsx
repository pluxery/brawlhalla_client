import React, {useContext, useEffect, useState} from 'react';
import '../../styles/Profile.css'
import BhButton from "../../components/UI/button/BhButton";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

const Profile = () => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                return await request('http://127.0.0.1:8000/api/auth/me', 'POST', null,
                    {
                        Authorization: `Bearer ${auth.token}`
                    }
                )
            } catch (e) {
            }
        }
        fetchData().then(result => setUser(result))
    }, [setUser]);
    return (
        <div className={'profile__wrapper'}>

            <div className={'profile__img_body'}>
                <img src={''} alt={'avatar'}/>
            </div>
            <BhButton>change avatar</BhButton>
            <BhButton>Edit profile</BhButton>
            <div className={'profile__text_body'}>
                <p>name: {user.name}</p>
                <p>elo: {user?.elo}</p>
                <BhButton>my posts</BhButton>
            </div>

            <div>
                <h4>comments: </h4>
            </div>
        </div>
    );
};

export default Profile;