import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import LegendService from "../../API/LegendService";
import { Avatar, Box, Modal } from "@mui/material";
import LoaderCross from "../../components/Loader/LoaderCross";
import StatItem from "../../components/StatItem/StatItem";
import RatingStarsCard from "../../components/RatingStarsCard/RatingStarsCard";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import UserService from '../../API/UserService';
import { Favorite } from '@mui/icons-material';


const ShowLegend = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const [legend, setLegend] = useState({})
    const [loading, setLoading] = useState(true)

    const [isFavorite, setIsFavorite] = useState(false)
    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [form, setForm] = useState({
        rating: 0
    })

    const changeInputHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const setRatingOnClick = async (e) => {
        // console.log(`legend id = ${legend.id}\nsending data\n${form.rating}`)
        const data = await LegendService.setRating(legend.id, form, auth.token)
    }
    const togleFavoriteLegend = async () => {
        await UserService.toggleFavorite(legend.id, auth.token)
        setIsFavorite(!isFavorite)
    }
    function getStickerByRating(rating) {
        if (rating <= 1) {
            return '/stickers/sentinel-cringe.png'
        }
        if (rating == 2) {
            return '/stickers/cor-bad.png'
        }
        if (rating == 3) {
            return '/stickers/ada-think.png'
        }
        if (rating == 4) {
            return '/stickers/wushang-like.png'
        }
        return '/stickers/bodwar-see.png'
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        LegendService.getLegendById(id).then(response => {
            setLegend(response.data)
            return response.data
        }).then((leg) => {
            if (auth.isAuthenticated) {
                UserService.getFavoriteLegends(auth.user.id)
                    .then(r => {
                        setIsFavorite(userIsSetLegend(r.data, leg.id))
                        setLoading(false)
                    })
            }else{
                setLoading(false)
            }

        })






    }, [id, setLegend, setIsFavorite])

    function userIsSetLegend(favoriteLegends, _id) {
        let res = false
        favoriteLegends.forEach(element => {
            console.log(`${element.id} == ${_id}`)
            if (element.id == _id) {
                res = true
            }
        });
        return res

    }
    return (
        loading ? <LoaderCross /> :
            <>

                <div className="row align-items-start">
                    <div className="col text-center">
                        <div className="row justify-content-center">
                            <Avatar alt="Remy Sharp"
                                variant="square"
                                className='m-3 p-2'
                                src={legend.main_image}
                                sx={{ width: 230, height: 230 }} />
                        </div>
                        <h3>{legend.name}</h3>
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <h4>Рейтинг пользователей</h4>
                                <RatingStarsCard rating={legend.rating} />

                                <p onClick={handleOpen}>Оценить</p>
                                {auth.isAuthenticated ?
                                    !isFavorite ?
                                        <Button className='btn-success'
                                            onClick={togleFavoriteLegend}>
                                            Добавить в избранное</Button> :
                                        <Button className='btn-danger'
                                            onClick={togleFavoriteLegend}>
                                            удалить из избранных
                                        </Button> : null

                                }




                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description">
                                    <Box style={boxStyle}>
                                        <div className={'bg-white rounded p-5 text-center'}>
                                            <img src={getStickerByRating(form.rating)}
                                                style={{ width: 80, height: 80, marginBottom: 5 }} />

                                            <input type="range"
                                                className="form-range"
                                                min="1" max="5" step="1"
                                                id="rating"
                                                name="rating"
                                                value={form.rating}
                                                onChange={changeInputHandler}
                                            />
                                            <p>{form.rating}</p>
                                            <div className={'text-center'}>
                                                <Button className={'btn-success m-1'}
                                                    onClick={setRatingOnClick}>Поставить оценку</Button>
                                            </div>
                                        </div>
                                    </Box>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={'card'}>
                            <div className={'card-body'}>
                                <h4>Оружия</h4>

                                <img src={legend.weapons[0].image}

                                    style={{ width: "5rem", height: '5rem', margin: 5 }}
                                    alt={'image not found'} />

                                <img src={legend.weapons[1].image}
                                    style={{ width: "5rem", height: '5rem', margin: 5 }}
                                    alt={'image not found'} />
                            </div>
                        </div>

                        <div className="card">
                            <h4>Характеристики</h4>
                            <ul className="list-group list-group-flush">

                                <li className="list-group-item">
                                    <StatItem size={legend.attack} name={'attack'} />
                                </li>
                                <li className="list-group-item">
                                    <StatItem size={legend.dexterity} name={'dexterity'} />
                                </li>
                                <li className="list-group-item">
                                    <StatItem size={legend.defend} name={'defend'} />

                                </li>
                                <li className={'list-group-item'}>
                                    <StatItem size={legend.speed} name={'speed'} />
                                </li>
                                {/*<li className={'list-group-item align-content-center'}>*/}
                                {/*    <span style={{fontWeight:600, fontSize:18}}> {legend.price}</span>*/}
                                {/*    <AttachMoneyIcon/>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="container text-center">

                    <div className={'card'}>
                        <div className={'card-body'}>
                            {legend.history}
                        </div>
                    </div>
                </div>


            </>
    );
};

export default ShowLegend;