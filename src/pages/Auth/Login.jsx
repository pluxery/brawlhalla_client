import React from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';


const Login = () => {
    return (

        <div className={''}>
            <form>
                <h1 className="start__text">С возвращением!</h1>
                <BhInput type={"text"} placeholder={'login'}></BhInput>
                <BhInput type={"password"} placeholder={'password'}></BhInput>
                <div className="login__button">
                <BhButton>Войти</BhButton>
                </div>
            </form>
        </div>
    );
};

export default Login;