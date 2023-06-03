import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PostService from "../../API/PostService";
import {AuthContext} from "../../context/AuthContext";
import {pink} from "@mui/material/colors";


const PostCard = ({post}) => {

    const auth = useContext(AuthContext)


    const [isLiked, setIsLiked] = useState(false)
    const toggleLikeOnClick = async (e) => {
        await PostService.toggleLikePost(post.id, auth.token)
        setIsLiked(!isLiked)
    }
    return (
        <div className="card">
            <div className={'flex-column '}>
                <NavLink to={`/posts/search/author/${post.author.id}`} className={'text-primary'}>
                    <span>{post.author.name}</span>
                </NavLink>
                <span> | {post.created_at}</span>
            </div>
            <img src={post.image}
                 className="card-img-top rounded mx-auto d-block" alt="..."
                 style={{height: "12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {post.category ? <>
                    <span>Категория:</span> <br/>
                    <NavLink to={`/posts/search/category/${post.category.id}`}>
                        <span>{post.category?.name}</span>
                    </NavLink>
                </> : null}
                <div>
                    {post.tags?.map((tag, index) =>
                        (
                            <NavLink to={`/posts/search/tag/${tag.id}`}
                                     className={'text-primary'}>#{tag.name + " "}
                            </NavLink>
                        ))}
                </div>

                <div>
                    <span>{post?.description}</span>
                </div>
            </div>
            <NavLink to={`/posts/${post.id}`}
                     className="btn btn-success
                      btn-sm btn-block">
                Посмотреть
            </NavLink>
            <div className="container text-start">
                    <span onClick={toggleLikeOnClick}>
                         {isLiked ?
                             <>
                                 {post.likes}
                                 <FavoriteIcon sx={{color: pink[500]}}/>
                             </> :
                             <>
                                 {post.likes}
                                 <FavoriteIcon/>
                             </>
                         }
                    </span>
                <span>
                        {post.comments}<ModeCommentIcon/>
                    </span>
            </div>

        </div>);
};

export default PostCard;