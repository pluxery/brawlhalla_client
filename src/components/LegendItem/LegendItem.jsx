import React from 'react';
import './Legend.css'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const LegendItem = ({legend}) => {

    return (
        <div className="card mb-2" style={{width: "12rem", height: "16rem"}}>
            <img src="https://www.brawlhalla.com/c/uploads/2021/07/bodvar.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <NavLink to={`/legends/${legend.id}`}>
                    <Button className={'btn-success'}>{legend.name}</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default LegendItem;