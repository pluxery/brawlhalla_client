import React, {useEffect, useState} from 'react';
import PostCard from "../PostCard/PostCard";
import {useHttp} from "../../hooks/http.hook";

import {useParams} from "react-router-dom";

const ProfilePostList = () => {
    const {request} = useHttp()
    const params = useParams()
    const userId = params.id
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const postsByUserId = await request(`/posts?author=${userId}`)
                return postsByUserId.data
            } catch (e) {
            }
        }
        fetchData().then(result => setPosts(result))
    }, [request, setPosts, userId]);
    return (
        <div className={'posts__wrapper'}>
            {posts.map(item => (
                <PostCard post={item} key={item.id}/>
            ))}
        </div>
    );
};

export default ProfilePostList;