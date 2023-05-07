import React, {useContext, useEffect, useState} from 'react';
import "./Header.css";
import {AuthContext} from "../../context/AuthContext";
import {NavLink, redirect, useParams} from "react-router-dom";
import {Button} from 'react-bootstrap';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {useHttp} from "../../hooks/http.hook";

const Header = () => {
    const auth = useContext(AuthContext)
    const logoutOnClick = () => {
        auth.logout()
    }

    return (
        <div className={'header__wrapper'}>
            <div>
                <NavLink className={'header__link'} to={'/posts'}>Посты</NavLink>
                <NavLink className={'header__link'} to={'/news'}>Новости</NavLink>
                <NavLink className={'header__link'} to={'/legends'}>Легенды</NavLink>
                <NavLink className={'header__link'} to={'/weapons'}>Оружия</NavLink>
                <NavLink className={'header__link'} to={'/about'}>О Проекте</NavLink>
            </div>

            <div>
                {auth.token == null ? <NavLink to={'/'}><Button>Войти</Button></NavLink> :
                    <>
                        <NavLink className={'header__link'} to={`/profile/${auth.user.id}`}>
                            {auth.user.name}
                            <AccountBoxIcon/>
                        </NavLink>

                        <NavLink to={'/'}><Button
                            className={'btn-danger'}
                            onClick={logoutOnClick}>
                            Выйти</Button></NavLink>


                    </>}
            </div>
        </div>
    );
};

export default Header;