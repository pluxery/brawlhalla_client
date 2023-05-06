import React, {useContext} from 'react';
import "./Header.css";
import BhLink from "../UI/link/BhLink";
import {AuthContext} from "../../context/AuthContext";
import {NavLink, redirect} from "react-router-dom";
import BhButton from "../UI/button/BhButton";

const Header = () => {
    const auth = useContext(AuthContext)

    const logoutOnClick = () => {
        auth.logout()
    }
    return (
        <div className={'header__wrapper'}>
            <div>
                <BhLink to={'/posts'}>Посты</BhLink>
                <BhLink to={'/news'}>Новости</BhLink>
                <BhLink to={'/legends'}>Легенды</BhLink>
                <BhLink to={'/weapons'}>Оружия</BhLink>
                {/*<a className={'link'} href={'https://www.brawlhalla.com/glory-calculator/'}>Калькулятор</a>*/}
                <BhLink to={'/about'}>О Проекте</BhLink>
            </div>

            <div>
                {auth.token == null ? <BhLink to={'/'}>Войти</BhLink>:
                    <>
                    <NavLink to={'/profile'}>Профиль</NavLink>
                    <BhButton onClick={logoutOnClick}>Выйти</BhButton>
                </>}
            </div>
        </div>
    );
};

export default Header;