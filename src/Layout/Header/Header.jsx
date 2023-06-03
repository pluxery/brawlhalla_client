import React, {useContext, useEffect, useState} from 'react';
import "./Header.css";
import {AuthContext} from "../../context/AuthContext";
import {NavLink} from "react-router-dom";
import {Button} from 'react-bootstrap';
import UserService from "../../API/UserService";
import {Avatar} from "@mui/material";


const Header = () => {
    const auth = useContext(AuthContext)

    const logoutOnClick = () => {
        UserService.logout(auth.token).then(() => auth.logout())
    }
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (auth.isAuthenticated) {
            UserService.getUserById(auth.user.id, auth.token)
                .then(r => {
                    setUser(r.data.data)
                    setIsLoading(false)
                }).catch((e) => console.log(e.message));
        }
    }, [auth])

    return (<>
        <div className={'header__wrapper'}>
            <div>
                <NavLink className={'header__link'} to={'/posts'}>Посты</NavLink>
                <NavLink className={'header__link'} to={'/news'}>Новости</NavLink>
                <NavLink className={'header__link'} to={'/legends'}>Легенды</NavLink>
                <NavLink className={'header__link'} to={'/weapons'}>Оружия</NavLink>
                <NavLink className={'header__link'} to={'/about'}>О Проекте</NavLink>
            </div>


            <div className="container-auto text-end">
                <div className="row align-items-center justify-content-end">
                    <div className="col-auto">
                        {auth.isAuthenticated ?
                            <NavLink className={'header__link'} to={`/profile/${user.id}`}>
                                {user.name}
                            </NavLink> : null}
                    </div>
                    <div className="col-auto">
                        {auth.isAuthenticated ?
                            isLoading?<span
                                    className="spinner-border spinner-border-lg text-white"
                                    role="status"
                                    aria-hidden="true"></span>:

                            <Avatar alt="Remy Sharp"
                                    src={user.avatar}
                                    sx={{width: 40, height: 40}}/>
                            : null}
                    </div>
                    <div className="col-auto">
                        <NavLink to={'/'}>
                            {auth.isAuthenticated ?
                                isLoading?
                                    <button className="btn btn-success" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status"
                                                  aria-hidden="true"></span>Loading...
                                    </button> :
                                <Button className={'btn-danger'} onClick={logoutOnClick}>Выйти</Button>
                                : null}
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    </>);
};

export default Header;