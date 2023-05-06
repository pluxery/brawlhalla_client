import React, {useContext, useEffect, useState} from 'react';
import PostItem from "../../components/PostItem/PostItem";
import '../../styles/Posts.css'

import PostService from "../../API/PostService";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import {AuthContext} from "../../context/AuthContext";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const auth = useContext(AuthContext)

    useEffect(() => {
        PostService.getAllPosts().then(r => setPosts(r.data))
    }, [setPosts]);

    return (
        <>
            {auth.token ? <NavLink to={'/posts/create'}>
                <Button className={'mt-2 btn-success'}>Создать статью<AddIcon/></Button>
            </NavLink> : null}
            <h1>Последние:</h1>

            <div className={'posts__wrapper'}>
                {posts.map(item => (
                    <PostItem post={item} key={item.id}/>
                ))}
            </div>
        </>
    );
};

export default Posts;