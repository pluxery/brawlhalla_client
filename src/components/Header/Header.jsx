import React, {useContext, useEffect, useState} from 'react';
import "./Header.css";
import BhLink from "../UI/link/BhLink";
import {AuthContext} from "../../context/AuthContext";
import {NavLink, redirect} from "react-router-dom";
import BhButton from "../UI/button/BhButton";
import {Button} from 'react-bootstrap';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {useHttp} from "../../hooks/http.hook";

const Header = () => {
    const auth = useContext(AuthContext)

    const logoutOnClick = () => {
        auth.logout()
    }
    const {request} = useHttp()
    const [user, setUser] = useState({});
    useEffect(() => {
        async function fetchData() {
            try {
                return await request('http://127.0.0.1:8000/api/auth/me', 'POST')
            }
            catch (e) {
            }
        }
        fetchData().then(result => setUser(result))
    }, [setUser]);


    return (
        <div className={'header__wrapper'}>
            <div>
                <NavLink className={'header__link'} to={'/posts'}>Посты</NavLink>
                <NavLink className={'header__link'} to={'/news'}>Новости</NavLink>
                <NavLink className={'header__link'} to={'/legends'}>Легенды</NavLink>
                <NavLink className={'header__link'} to={'/weapons'}>Оружия</NavLink>
                {/*<a className={'link'} href={'https://www.brawlhalla.com/glory-calculator/'}>Калькулятор</a>*/}
                <NavLink className={'header__link'} to={'/about'}>О Проекте</NavLink>
            </div>

            <div>
                {auth.token == null ? <NavLink to={'/'}><Button>Войти</Button></NavLink> :
                    <>
                        <NavLink  className={'header__link'} to={'/profile'}>username<AccountBoxIcon/></NavLink>
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