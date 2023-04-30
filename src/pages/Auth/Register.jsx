
import React from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";

const Register = () => {
    return (
        <div className={''}>
            <form>
                <BhInput type={"text"} placeholder={'username'}></BhInput>
                <BhInput type={"text"} placeholder={'email'}></BhInput>
                <BhInput type={"password"} placeholder={'password'}></BhInput>
                <BhInput type={"password"} placeholder={'confirm password'}></BhInput>
                <BhButton>Зарегестрироваться</BhButton>
            </form>
        </div>
    );
};

export default Register;