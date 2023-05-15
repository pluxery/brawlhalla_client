import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";


const ProfileCard = ({author}) => {
    return (
            <div className="card">
                <h3>{author.name}</h3>
                <img
                    src={'https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm'}
                    alt={'...'} style={{
                    width: 100, height: 100
                }}
                    className={'rounded mx-auto d-block'}/>
                <p>{author.email}</p>
                <NavLink to={`/profile/${author.id}`}>
                    <Button className={'btn-success'}>Открыть профиль</Button>
                </NavLink>
            </div>
    );
};

export default ProfileCard;