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
import EmptyDataAlert from '../../../components/Alerts/EmptyDataAlert';
import LoaderCross from "../../../components/Loader/LoaderCross";

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
                <LoaderCross/> :
                posts.length !== 0 ?
                    <div className={'posts__wrapper'}>
                        {posts.map(item => (
                            <PostCard post={item} key={item.id}/>
                        ))}
                    </div>
                    :
                    <EmptyDataAlert text={id === auth.user.id ? "У вас нет понравившихся постов :(" :
                        "У пользователя нет понравившихся постов"}/>

            }
        </>
    )

};

export default LikedPosts;