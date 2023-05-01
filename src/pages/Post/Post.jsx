import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../../API/PostService";
import postItem from "../../components/PostItem/PostItem";

const Post = () => {
    const params = useParams();
    const postId = params.id;

    const [post, setPost] = useState({});


    useEffect(() => {
        PostService.getPostById(postId).then(r => setPost(r.data))
    }, [setPost]);
    return (
        <div>
            <h2>Post = {post.title}</h2>
        </div>
    );
};

export default Post;