import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import UserService from "../../API/UserService";
import {Button} from "react-bootstrap";
import DangerAlert from "../../components/Alerts/DangerAlert";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setForm]
        = useState({
        name: '',
        email: '',
        steam_link: '',
        // cur_password: '',
        // new_password: '',
        // repeat_new_password: '',
        elo: '',
        avatar: '',
        about: '',
    })
    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    function filteredForm(_form) {
        return Object.fromEntries(Object.entries(_form).filter(([key, val]) => val !== ''));
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        steam_link: '',
        elo: '',
        about: '',
    })

    const validateForm = (_form) => {
        setMessage('error data')
        return false
    }
    const setRankImage = (elo) => {
        return 0
    }
    const [message, setMessage] = useState('ss')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const updateProfile = async (e) => {
        e.preventDefault()
        if (message) {
            setVisibleAlert(true)
        }
        if (validateForm(filteredForm(form))) {
            await UserService.updateProfile(auth.token, form)
            navigate(`/profile/${auth.user.id}`)

        }
        console.log(filteredForm(form))

    }

    useEffect(() => {
        UserService.getMe(auth.token).then(r => setUser(r))
    }, [setUser])

    return (
        <div className={'m-5 container-sm'}>
            {visibleAlert ? <DangerAlert message={message}/> : null}
            {/*<div className="input-group mb-3">*/}
            {/*    <input type="file" className="form-control"/>*/}
            {/*    <label className="input-group-text" htmlFor="inputGroupFile02">Загрузить автарку</label>*/}
            {/*</div>*/}
            <div className="input-group mb-3">
                <span className="input-group-text">Сменить имя</span>
                <input type="text" className="form-control" placeholder="username"
                       name={'name'}
                       value={form.name ? form.name : user.name}
                       onChange={changeInputHandler}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Сменить почту</span>
                <input type="email" className="form-control" placeholder="email@example.com"
                       name={'email'}
                       value={form.email ? form.email : user.email}
                       onChange={changeInputHandler}
                />
            </div>

            {/*<div className="input-group mb-3">*/}
            {/*    <span className="input-group-text">Сменить пароль</span>*/}
            {/*    <input type="password" className="form-control" placeholder="текущий пароль"/>*/}
            {/*    <input type="password" className="form-control" placeholder="новый пароль"/>*/}
            {/*    <input type="password" className="form-control" placeholder="повторите новый пароль"*/}
            {/*    />*/}
            {/*</div>*/}

            <div className="input-group mb-3">
                <span className="input-group-text">https://steamcommunity.com/profiles/</span>
                <input type="text" className="form-control" placeholder="76561198111898341"
                       name={'steam_link'}
                       value={form.steam_link ? form.steam_link : user.steam_link}
                       onChange={changeInputHandler}/>
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">Твой ранг</span>
                <input type="text" className="form-control" placeholder="750 - 3000"
                       name={'elo'}
                       value={form.elo ? form.elo : user.elo}
                       onChange={changeInputHandler}/>
                <span className="input-group-text">{setRankImage(1)}</span>
            </div>
            <div className="input-group">
                <span className="input-group-text">О себе</span>
                <textarea className="form-control" placeholder={'Расскажи о себе и своих предпочтениях...'}
                          name={'about'}
                          onChange={changeInputHandler}
                          value={form.about ? form.about : user.about}>
                </textarea>
            </div>

            <Button className={'btn-success mt-3'} onClick={updateProfile}>Редактировать</Button>
        </div>
    );
};

export default EditProfile;