import React, {useContext, useEffect, useState} from 'react';
import PostItem from "../../components/PostItem/PostItem";
import '../../styles/Posts.css'


import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";

const PostIndex = () => {
    const [posts, setPosts] = useState([]);
    const auth = useContext(AuthContext)
    const {request, loading} = useHttp()
    useEffect(() => {
        async function getAllPosts() {
            return await request('http://127.0.0.1:8000/api/posts',)
        }
        getAllPosts().then(r => setPosts(r.data))
    }, [setPosts]);


    if (loading) {
        return <Loader/>
    } else {
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
    }
};

export default PostIndex;