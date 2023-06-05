import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import UserService from "../../../API/UserService";
import {AuthContext} from "../../../context/AuthContext";
import EmptyDataAlert from "../../../components/Alerts/EmptyDataAlert";
import LoaderCross from "../../../components/Loader/LoaderCross";

const ProfileAbout = () => {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const auth = useContext(AuthContext)


    useEffect(() => {
        UserService.getUserById(id, auth.token)
            .then(r => {
                setUser(r.data.data)
                setIsLoading(false)
            });
    }, [id, setUser, setIsLoading, auth.token]);


    return (
        <>
            {isLoading ?
                <LoaderCross/>
                :
                <div>
                    {!user.about ?
                        <EmptyDataAlert text={id === auth.user.id ? "Расскажите о себе!" : "Информация отсутствует"}/>
                        : user.about}
                </div>}
        </>
    );
};

export default ProfileAbout;