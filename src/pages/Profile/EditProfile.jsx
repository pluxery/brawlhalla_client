import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import UserService from "../../API/UserService";
import {Button} from "react-bootstrap";
import DangerAlert from "../../components/Alerts/DangerAlert";
import {useNavigate} from "react-router-dom";
import {Avatar} from "@mui/material";
import ObjectUtils from "../../utils/ObjectUtils";

const EditProfile = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        steam_link: '',
        elo: '',
        about: '',
        avatar: '',
    })
    const changeInput = event => {
        setFormInput({...formInput, [event.target.name]: event.target.value})
        if (event.target.files) {
            setFormInput({...formInput, avatar: event.target.files[0]})
        }
    }

    const [user, setUser] = useState({
        name: '',
        email: '',
        steam_link: '',
        elo: '',
        about: '',
        avatar: '',
    })
    const [message, setMessage] = useState('')
    const [visibleAlert, setVisibleAlert] = useState(false)
    const updateProfile = async (e) => {
        e.preventDefault()
        const body = ObjectUtils.convertToFormData(ObjectUtils.filter(formInput, function ([key, val]) {
            return val !== ''
        }))
        await UserService.updateProfile(auth.user.id, auth.token, body)
            .then(res => {
                if (!res) {
                    setMessage('Некоректные данные!')
                    setVisibleAlert(true)
                } else {
                    navigate(`/profile/${auth.user.id}`)
                }
            }).catch(err => console.log(err.message));
    }

    useEffect(() => {
        UserService.getMe(auth.token).then(r => setUser(r.data.data))
    }, [auth.token, setUser])


    function getRankImage(elo) {
        if (elo < 900) {
            return '/ranked/900.webp'
        }
        if (elo < 1100) {
            return '/ranked/1100.webp'
        }
        if (elo < 1400) {
            return '/ranked/1400.webp'
        }
        if (elo < 1680) {
            return '/ranked/Gold.webp'
        }
        if (elo < 2000) {
            return '/ranked/Platinum.webp'
        }
        if (elo >= 2000) {
            return '/ranked/Diamond.webp'
        }
    }

    return (
        <div className={'m-5 container-sm'}>
            {visibleAlert ? <DangerAlert message={message}/> : null}

            <div className="container text-center">
                <div className="row justify-content-center">
                    <Avatar alt="Remy Sharp"
                            variant="square"
                            className='m-3 p-2'
                            src={user.avatar}
                            sx={{width: 170, height: 170}}/>
                </div>
            </div>

            <div className="input-group mb-3">
                <input type="file"
                       className="form-control"
                       id={'avatar'}
                       name={'avatar'}
                       onChange={changeInput}

                />
                <label className="input-group-text" htmlFor="avatar">Загрузить автарку</label>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Сменить имя</span>
                <input type="text" className="form-control"
                       placeholder={user.name}
                       name={'name'}
                       value={formInput.name}
                       onChange={changeInput}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Сменить почту</span>
                <input type="email" className="form-control"
                       placeholder={user.email}
                       name={'email'}
                       value={formInput.email}
                       onChange={changeInput}
                />
            </div>


            <div className="input-group mb-3">
                <span className="input-group-text">https://steamcommunity.com/profiles/</span>
                <input type="text" className="form-control"
                       placeholder={user.steam_link}
                       name={'steam_link'}
                       value={formInput.steam_link}
                       onChange={changeInput}/>
            </div>

            <div className="input-group mb-3 col">
                <div className={'container row text-center col-auto'}>
                    <img src={getRankImage(formInput.elo)}
                         style={{width: 110, height: 110, marginBottom: 5}} alt={'not found'}/>
                </div>
                <div className={'col'}>
                <input type="range"
                       className="form-range "
                       min="750" max="3000" step="10"
                       id="elo"
                       name='elo'
                       value={formInput.elo}
                       onChange={changeInput}/>

                <span className="input-group-text">Твой ранг</span>
                <input type="text" className="form-control"
                       placeholder={user.elo ? user.elo : "от 750 до 3000"}
                       name={'elo'}
                       value={formInput.elo}
                       onChange={changeInput}/>
            </div>

            </div>
            <div className="input-group">
                <span className="input-group-text">О себе</span>
                <textarea className="form-control"
                          placeholder={user.about ? user.about : 'Расскажи о себе и своих предпочтениях...'}
                          name={'about'}
                          onChange={changeInput}
                          value={formInput.about}>
                </textarea>
            </div>

            <Button className={'btn-success mt-3'} onClick={updateProfile}>Редактировать</Button>

        </div>
    );
};

export default EditProfile;