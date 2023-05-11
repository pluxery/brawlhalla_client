import React, {useEffect, useState} from 'react';
import PostCard from "../../../components/PostCard/PostCard";
import {useHttp} from "../../../hooks/http.hook";

import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";

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
            <NavLink to={'/posts/create'}>
                <Button className={'mt-2 btn-success'}>Создать статью<AddIcon/></Button>
            </NavLink>
            {posts.map(item => (
                <PostCard post={item} key={item.id}/>
            ))}
        </div>
    );
};

export default ProfilePostList;