import React, {useEffect} from 'react';
import './WeaponCard.css'
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";

const WeaponCard = ({weapon}) => {

    return (

        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf36B150vVGbX-oqoie2uW8bssNq8rgFuhGg&usqp=CAU"
                 className="card-img-top rounded mx-auto d-block" alt="..."
                 style={{height: "12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{weapon.name}</h5>
            </div>

            <NavLink to={`/weapons/${weapon.id}`}
                     className="btn btn-success btn-sm btn-block">
                Посмотреть
            </NavLink>
        </div>
    );
};

export default WeaponCard;