import React from 'react';
import BhLink from "../UI/link/BhLink";
import {NavLink} from "react-router-dom";


const PostItem = ({post}) => {
    return (
        <div className="card" style={{width: "25rem", height: "25rem"}}>
            <img src="https://cdn2.unrealengine.com/atla-productart-1920x1080-1920x1080-477cda5a5a30.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">краткое описание</p>
                    <NavLink to={`/posts/${post.id}`} className="btn btn-success">View more</NavLink>
                </div>
        </div>
    );
};

export default PostItem;