import React, {useContext, useEffect} from 'react';
import "./Header.css";
import {AuthContext} from "../../context/AuthContext";
import {NavLink} from "react-router-dom";
import {Button} from 'react-bootstrap';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {useHttp} from "../../hooks/http.hook";
import {useState} from "react";
import UserService from "../../API/UserService";


const Header = () => {
    const auth = useContext(AuthContext)

    const [username, setUsername] = useState('')
    const logoutOnClick = () => {
        UserService.logout(auth.token).then(() => auth.logout())
    }

    useEffect(() => {
        setUsername(auth.user.name)
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

                <div>
                    {auth.isAuthenticated ? <>
                        <NavLink className={'header__link'} to={`/profile/${auth.user.id}`}>
                            {username}
                            <AccountBoxIcon/>
                        </NavLink>

                        <NavLink to={'/'}>
                            <Button className={'btn-danger'}
                                    onClick={logoutOnClick}>
                                Выйти
                            </Button>
                        </NavLink>

                    </> : null}
                </div>

            </div>
        </>);
};

export default Header;