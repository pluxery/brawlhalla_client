import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import {grey, pink} from "@mui/material/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const PostCard = ({post}) => {
    const linkStyle ={color: "black", textDecoration: "none"}
    return (
        <div className="card">

            <div className={'text-start'}>
                <NavLink to={`/posts/search/author/${post.author.id}`} style={linkStyle}>
                    <PersonOutlineIcon sx={{color: grey[700], fontSize: 18}}/>
                    <span>{post.author.name}</span>
                </NavLink>
            </div>
            <img src={post.image}
                 className="card-img-top rounded mx-auto d-block" alt="..."
                 style={{height: "12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {post.category ?
                    <NavLink to={`/posts/search/category/${post.category.id}`} style={linkStyle}>
                        <i>Категория: {post.category?.name}</i>
                    </NavLink> : null}
                <div>
                    {post.tags?.map((tag, index) =>
                        (
                            <NavLink to={`/posts/search/tag/${tag.id}`} style={linkStyle}
                                     className={'text-primary'}>#{tag.name + " "}
                            </NavLink>
                        ))}
                </div>

                <div>
                    
                </div>
            </div>
            <NavLink to={`/posts/${post.id}`}
                     className="btn btn-success
                      btn-sm btn-block">
                Посмотреть
            </NavLink>
            <div className="mt-1 row justify-content-between">
                <div className="col-auto">
                    <i>{post.likes}</i>
                    <FavoriteBorderIcon sx={{color: pink[500], fontSize: 18}}/>
                </div>
                <div className="col-auto">
                    <i>{post.comments}</i>
                    <ChatBubbleOutlineIcon sx={{color: grey[700], fontSize: 18}}/>
                </div>
                <div className={'col text-end align-content-center'}>
                    <CalendarTodayIcon sx={{color: grey[700], fontSize: 18}}/>
                    {post.created_at}
                </div>

            </div>
        </div>);
};

export default PostCard;