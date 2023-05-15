import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

import axios from "axios";
import {API_URI} from "../../hooks/http.hook";
import {Button} from "react-bootstrap";

const CommentCard = ({comment}) => {

    const auth = useContext(AuthContext)
    const [isDeleted, setIsDeleted] = useState(false)
    const deleteCommentOnClick = async (e) => {
        //e.preventDefault()
        setIsDeleted(true)
        try {
            await axios.delete(`${API_URI}/comments/${comment.id}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-auto me-auto">{comment.created_at}</div>
                    <div className="col-auto">{
                        auth.user.id === comment.author.id ?
                            <span className={'text-danger'} onClick={deleteCommentOnClick}>
                            {!isDeleted ? "Удалить" : "Удалено"}
                        </span> : null}
                    </div>
                </div>

            </div>
            <div className="card-body">
                <NavLink to={`/profile/${comment.author?.id}`}>
                    <h5 className="card-title">{comment.author?.name}</h5>
                </NavLink>
                <p className="card-text">{comment.text}</p>
            </div>
        </div>);
};

export default CommentCard;