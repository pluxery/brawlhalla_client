import React from 'react';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Avatar} from "@mui/material";


const ProfileCard = ({author}) => {
    return (
            <div className="card text-center">
                <h3>{author.name}</h3>
                <Avatar
                    src={author.avatar}
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