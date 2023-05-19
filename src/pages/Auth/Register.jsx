import React, {useContext, useState} from 'react';
import BhInput from "../../components/UI/input/BhInput";
import BhButton from "../../components/UI/button/BhButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Login.css';
import {AuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {set} from "mobx";

const Register = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {request} = useHttp()
    const [form, setForm] = useState({
        name: '', email: '', password: '', confirm_password: ''
    })
    const [message, setMessage] = useState('')
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const validate = () => {
        if ((form.name.length < 3 || form.email.length < 6 || form.password.length < 6 || form.confirm_password.length < 6)) {
            return false
        }
        return form.password === form.confirm_password;
    }

    const registerOnClick = async (e) => {
        e.preventDefault()
        if (validate()) {
            try {
                const data = request('/auth/register', 'POST', {...form})
                    .then(r => auth.login(r.access_token, r.user.original))
                navigate('/posts')
            } catch (e) {
                console.log(e)
            }
        } else {
            setMessage('Ошибка: некорректные данные. ')
        }
    }
    return (

        <div className={''}>
            <form>
                <h1 className="start__text">С возвращением!</h1>

                <span className={'text-danger'}>{message}</span>

                <BhInput name='name'
                         id="name"
                         type={"text"}
                         placeholder={'username'}
                         value={form.name}
                         onChange={changeInputHandler}>
                </BhInput>

                <BhInput name='email'
                         id="email"
                         type={"email"}
                         placeholder={'email'}
                         value={form.email}
                         onChange={changeInputHandler}>
                </BhInput>

                <BhInput name={'password'}
                         id='password'
                         type={"password"}
                         placeholder={'password'}
                         value={form.password}
                         onChange={changeInputHandler}>
                </BhInput>

                <BhInput name={'confirm_password'}
                         id='confirm_password'
                         type={"password"}
                         placeholder={'confirm password'}
                         value={form.confirm_password}
                         onChange={changeInputHandler}>
                </BhInput>


                <div className="login__button">
                    <BhButton onClick={registerOnClick}>Зарегистрироваться</BhButton>
                </div>
            </form>
        </div>
    );
};

export default Register;