import React, {useEffect, useState} from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';


const Login = () => {
        return (

            <div className={''}>
                <form>
                    <h1 className="start__text">С возвращением!</h1>
                    <label htmlFor="email"/>
                    <BhInput id="email" type={"email"} placeholder={'email'}></BhInput>
                    <BhInput id='password' type={"password"} placeholder={'password'}></BhInput>
                    <div className="login__button">
                        <BhButton type={'submit'}>Войти</BhButton>
                    </div>
                </form>
            </div>
        );
    };

    export default Login;