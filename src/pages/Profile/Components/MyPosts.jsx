import React, {useContext, useEffect, useState} from 'react';
import PostItem from "../../../components/PostItem/PostItem";
import {useHttp} from "../../../hooks/http.hook";
import {AuthContext} from "../../../context/AuthContext";

const MyPosts = () => {
    const {request} = useHttp()
    const auth = useContext(AuthContext)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await request('http://127.0.0.1:8000/api/auth/me', 'POST')
                const postsByUserId = await request(`http://127.0.0.1:8000/api/posts?author=${user.id}`)
                console.log("my posts = ", postsByUserId)
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