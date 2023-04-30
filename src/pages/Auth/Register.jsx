
import React from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";


const Register = () => {
    return (
        <div className={''}>
            <form>
                <h1 className="start__text">Присоединяйтесь к нам!</h1>
                <BhInput type={"text"} placeholder={'username'}></BhInput>
                <BhInput type={"text"} placeholder={'email'}></BhInput>
                <BhInput type={"password"} placeholder={'password'}></BhInput>
                <BhInput type={"password"} placeholder={'confirm password'}></BhInput>
                <div className="login__button">
                <BhButton>Зарегистрироваться</BhButton>
                </div>
            </form>
        </div>
    );
};

export default Register;