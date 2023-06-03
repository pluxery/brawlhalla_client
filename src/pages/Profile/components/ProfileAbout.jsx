import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import UserService from "../../../API/UserService";
import {AuthContext} from "../../../context/AuthContext";

const ProfileAbout = () => {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const auth = useContext(AuthContext)

    useEffect(() => {
        UserService.getUserById(id, auth.token)
            .then(r => {
                setUser(r.data)
                setIsLoading(false)
            });
    }, [id, setUser, setIsLoading, auth.token]);


    return (
        <>
            {isLoading ?
                <div className="mt-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div>
                    {!user.about ? "информация отсутсвует" : user.about}
                </div>}
        </>
    );
};

export default ProfileAbout;