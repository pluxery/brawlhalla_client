import React from 'react';
import './NewsCard.css'
import {NavLink} from "react-router-dom";

const NewsCard = ({news}) => {
    return (
        <div className="card" style={{width: "25rem", height: "25rem"}}>
            <img src="https://www.brawlhalla.com/c/uploads/2022/08/Brawlhalla_BoxArt_1920x1080.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Patch 7.03</h5>
                <p className="card-text">краткое описание</p>
                <NavLink to={`/posts/${1}`} className="btn btn-success">View more</NavLink>
            </div>
        </div>
    );
};

export default NewsCard;