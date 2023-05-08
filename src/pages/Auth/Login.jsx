import React, {useContext, useState} from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from '../../hooks/http.hook'
import {useNavigate} from "react-router-dom";

const Login = () => {
    const authContext = useContext(AuthContext)
    const {request} = useHttp()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await request('/auth/login', 'POST', {...form})
            authContext.login(data.access_token, data.user.original)
            navigate('/posts')
        } catch (e) {

        }
    }
    return (

        <div className={''}>
            <form>
                <h1 className="start__text">С возвращением!</h1>
                <label htmlFor="email"/>
                <label htmlFor="email"/>
                <BhInput name='email'
                         id="email"
                         type={"email"}
                         placeholder={'email'}
                         value={form.email}
                         onChange={changeInputHandler}
                ></BhInput>
                <label htmlFor="password"/>
                <BhInput name={'password'}
                         id='password'
                         type={"password"}
                         placeholder={'password'}
                         value={form.password}
                         onChange={changeInputHandler}
                ></BhInput>
                <div className="login__button">
                    <BhButton onClick={loginHandler}>Войти</BhButton>
                </div>
            </form>
        </div>
    );
};

export default Login;