import React, {useContext, useEffect, useState} from 'react';
import PostCard from "../../components/PostCard/PostCard";
import '../../styles/Posts.css'


import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import $api from "../../hooks/http2.hook";
import PostList from "../../components/PostList/PostList";

const IndexPost = () => {
    const [posts, setPosts] = useState([]);
    const auth = useContext(AuthContext)
    const {request, loading} = useHttp()
    const params = useParams()

    function buildQuery() {
        let query = ''
        if (params.tag) {
            query += `?tag=${params.tag}`
        }
        if (params.category) {
            query += `?category=${params.category}`
        }
        if (params.author) {
            query += `?author=${params.author}`
        }
        return query
    }

    useEffect(() => {

        try {
            async function getAllPosts() {
                const query = buildQuery()
                return await request(`/posts${query}`,)
            }

            getAllPosts().then(r => setPosts(r.data))
        } catch (e) {
            console.log(e.message)
        }
    }, [params, request, setPosts]);


    if (loading) {
        return <Loader/>
    } else {
        return (
            <>
                {auth.token ? <NavLink to={'/posts/create'}>
                    <Button className={'mt-2 btn-success'}>Создать статью<AddIcon/></Button>
                </NavLink> : null}
                <h1>Последние:</h1>
                <PostList posts={posts}/>
            </>
        );
    }
};

export default IndexPost;