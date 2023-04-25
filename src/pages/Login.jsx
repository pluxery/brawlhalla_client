import React from 'react';
import BhInput from "../components/UI/input/BhInput";
import BhButton from "../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

const Login = () => {
    return (

        <div className={'main'}>
            <form>
                <BhInput type={"text"} placeholder={'email'}></BhInput>
                <BhInput type={"password"} placeholder={'password'}></BhInput>
                <BhButton>Войти</BhButton>
            </form>
        </div>
    );
};

export default Login;