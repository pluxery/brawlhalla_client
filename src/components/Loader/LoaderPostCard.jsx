import React from 'react';
import {NavLink} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {pink} from "@mui/material/colors";
import ModeCommentIcon from "@mui/icons-material/ModeComment";


// <div className="container text-center">
//     <div className="row justify-content-start">
const LoaderPostCard = () => {
    return (
        <div className="card">
            <div className={'container text-center  card-text placeholder-glow'}>
                <span className="placeholder col-7"></span>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <span className="spinner-border text-success m-5 p-1" ></span>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                </p>
            </div>
            <p className="card-text text-center placeholder-glow">
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
            </p>

        </div>
    );
};

export default LoaderPostCard;