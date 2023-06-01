import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import LegendService from "../../API/LegendService";
import {Avatar} from "@mui/material";

const ShowLegend = () => {

    const {id} = useParams()
    const [legend, setLegend] = useState({})

    useEffect(() => {
        LegendService.getLegendBuId(id).then(r => setLegend(r.data))
    }, [id, setLegend])
    return (
        <div>
            <h1>{legend.name}</h1>
            <Avatar src={'public/stats/attack.jpg'}/>
            <img src={"/public/stats/attack.jpg"} alt={'...'}/>
        </div>
    );
};

export default ShowLegend;