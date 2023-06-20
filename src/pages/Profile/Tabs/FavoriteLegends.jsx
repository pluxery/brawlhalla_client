import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import UserService from "../../../API/UserService";
import { AuthContext } from "../../../context/AuthContext";
import EmptyDataAlert from "../../../components/Alerts/EmptyDataAlert";
import LoaderCross from "../../../components/Loader/LoaderCross";
import LegendCard from '../../../components/LegendCard/LegendCard';

const FavotiteLegends = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const [favoriteLegends, setFavoriteLegends] = useState([]);
    const auth = useContext(AuthContext)
    useEffect(() => {
        console.log("ID", id)
        UserService.getFavoriteLegends(id).then(r => setFavoriteLegends(r.data))
        console.log(favoriteLegends)
        setIsLoading(false)
    }, [id, setIsLoading, auth.token]);


    return (
        <>
            {isLoading ?
                <LoaderCross />
                :
                <div className={'card'}>
                    <div className={'card-body'}>
                        {favoriteLegends.length === 0 ?
                            <EmptyDataAlert text={"Нет любимых легенд"} />
                            :
                            <div className={'posts__wrapper'}>
                                {favoriteLegends.map((item) => {
                                    return <LegendCard legend={item} key={item.id} />;
                                })}
                            </div>

                        }
                    </div>
                </div>
            }
        </>
    );
};

export default FavotiteLegends;