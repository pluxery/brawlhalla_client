import React from 'react';
import './LegendCard.css'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const LegendCard = ({legend}) => {
    return (
        <div className="card mb-2 text-center" style={{width: "12rem", height: "14rem"}}>
            <img src={legend.image}
                 style={{width: "6rem", height: "6rem"}}
                 className="card-img-top rounded mx-auto d-block" alt="..."/>
            <div className="card-body">
                {legend.name}
                <NavLink to={`/legends/${legend.id}`}>
                    <Button className={'btn-success'}>Посмотреть</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default LegendCard;