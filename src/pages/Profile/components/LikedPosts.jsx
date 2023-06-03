import React, {useEffect, useState} from 'react';
import {useHttp} from "../../../hooks/http.hook";


import Loader from "../../../components/Loader/Loader";

import UserService from '../../../API/UserService';
import {AuthContext} from '../../../context/AuthContext';
import {useContext} from 'react';
import PostCard from '../../../components/PostCard/PostCard';
import {NavLink, useParams} from 'react-router-dom';
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";

const LikedPosts = () => {
    const auth = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        UserService.getLikedPosts(id, auth.token)
            .then(r => {
                setPosts(r.data.data)
                setIsLoading(false)
            })

    }, [id, auth, setPosts])


    return (
        <>
            {isLoading ?
                <div className="mt-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :

                <div className={'posts__wrapper'}>
                    {posts.length !== 0 ?
                        posts.map(item => (
                            <PostCard post={item} key={item.id}/>
                        )) : <h3>Нет постов</h3>}
                </div>
            }
        </>
    );


};

export default LikedPosts;