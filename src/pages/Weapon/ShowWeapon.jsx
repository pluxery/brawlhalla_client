import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import LoaderCross from "../../components/Loader/LoaderCross";
import RipAlert from '../../components/Alerts/RipAlert';
import { Avatar } from '@mui/material';
import LegendService from '../../API/LegendService';
const ShowWeapon = () => {
    const { id } = useParams()

    const [weapon, setWeapon] = useState({})
    const [legends, setLegends] = useState([])
    const { request } = useHttp
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getWeaponById(id) {
            return await request(`/weapons/${id}`)
        }
        getWeaponById(id).then(res => {
            setWeapon(res.data)
            setLoading(false)
        })
    }, [id,request,setWeapon,setLoading])

    if (loading) {
        return <LoaderCross />
    } else {
        return (
            <>
                <div className="row align-items-start">
                    <div className="col text-center">
                        <div className="row justify-content-center">
                            <Avatar alt="Remy Sharp"
                                variant="square"
                                className='m-3 p-2'
                                src={weapon.image}
                                sx={{ width: 230, height: 230 }} />
                        </div>
                        <h3>{weapon.name}</h3>
                        <div className={'card'}>
                            <div className={'card-body'}>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <h4></h4>
                        </div>

                        <div className="card">
                            <h4>Легенды с этим оружием</h4>
                            <ul className="list-group list-group-flush">
                                {legends.map(legend => (
                                    <li className="list-group-item">
                                        {legend.name}
                                    </li>

                                ))}

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="container text-center">
                    <div className={'card'}>
                        <div className={'card-body'}>

                        </div>
                    </div>
                </div>
            </>

        );
    }

};

export default ShowWeapon;