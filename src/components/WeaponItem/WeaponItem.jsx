import React from 'react';
import './Weapon.css'
import {Button} from "react-bootstrap";

const WeaponItem = ({weapon}) => {
    return (
        <div className="card mb-3" style={{width: "13rem", height: "13rem"}}>
            <img style={{width:150, height:150}}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf36B150vVGbX-oqoie2uW8bssNq8rgFuhGg&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
                <Button className="btn-success">{weapon?.name}</Button>
            </div>
        </div>
    );
};

export default WeaponItem;