import React from 'react';
import {NavLink} from "react-router-dom";


const PostCard = ({post}) => {
    return (
        <div className="card">
            <div className={'flex-column '}>
                <NavLink to={`/posts/search/author/${post.author.id}`} className={'text-primary'}>
                    <span>{post.author.name}</span>
                </NavLink>
                <span> | {post.created_at}</span>
            </div>
            <img src="https://cdn2.unrealengine.com/atla-productart-1920x1080-1920x1080-477cda5a5a30.jpg"
                 className="card-img-top rounded mx-auto d-block" alt="..."
                 style={{height: "12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {post.category ? <>
                    <span>Категория:</span> <br/>
                    <NavLink to={`/posts/search/category/${post.category.id}`}>
                        <span>{post.category.name}</span>
                    </NavLink>
                </> : null
                }
                <div>
                    {post.tags?.map((tag, index) => (
                        index < 5 ?
                            <NavLink to={`/posts/search/tag/${tag.id}`} className={'text-primary'}>#{tag.name} </NavLink>
                            : null
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
        </div>
    );
};

export default PostCard;