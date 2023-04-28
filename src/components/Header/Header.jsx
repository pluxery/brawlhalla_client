import React from 'react';
import "./Header.css";
import BhLink from "../UI/link/BhLink";

const Header = () => {
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
                <BhLink to={'/login'}>Войти</BhLink>
                <BhLink to={'/register'}>Регистрация</BhLink>
                <BhLink to={'/profile'}>Профиль</BhLink>
            </div>
        </div>
    );
};

export default Header;