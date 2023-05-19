import React, {useContext, useState} from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import UserService from "../../API/UserService";
import {useHttp} from "../../hooks/http.hook";

const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {request} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const [message, setMessage] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()
        if (form.email && form.password) {
            try {
                request('/auth/login', 'POST', {...form}).then(r => auth.login(r.access_token, r.user.original))
                navigate('/posts')
            } catch (e) {
                console.log(e)
            }
        } else {
            setMessage('Заполните все поля')
        }
    }
    return (

        <div className={''}>
            <form>
                <h1 className="start__text">С возвращением!</h1>
                <span className={'text-danger'}>{message}</span>

                <BhInput name='email'
                         id="email"
                         type={"email"}
                         placeholder={'email'}
                         value={form.email}
                         onChange={changeInputHandler}
                ></BhInput>

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