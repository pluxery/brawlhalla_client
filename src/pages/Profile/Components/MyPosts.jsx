import React, {useContext, useEffect, useState} from 'react';
import PostItem from "../../../components/PostItem/PostItem";
import {useHttp} from "../../../hooks/http.hook";
import {AuthContext} from "../../../context/AuthContext";
import {useParams} from "react-router-dom";

const MyPosts = () => {
    const {request} = useHttp()
    // const auth = useContext(AuthContext)
    const params = useParams()
    const userId = params.id
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const postsByUserId = await request(`http://127.0.0.1:8000/api/posts?author=${userId}`)
                return postsByUserId.data
            } catch (e) {
            }
        }
        fetchData().then(result => setPosts(result))
    }, [setPosts]);
    return (
        <div className={'posts__wrapper'}>
            {posts.map(item => (
                <PostItem post={item} key={item.id}/>
            ))}
        </div>
    );
};

export default MyPosts;