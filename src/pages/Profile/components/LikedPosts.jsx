import React, { useEffect, useState } from 'react';
import { useHttp } from "../../../hooks/http.hook";


import Loader from "../../../components/Loader/Loader";

import UserService from '../../../API/UserService';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import PostCard from '../../../components/PostCard/PostCard';
import { useParams } from 'react-router-dom';

const LikedPosts = () => {
    const auth = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        UserService.getLikedPosts(id, auth.token).then(r => setPosts(r))
    }, [auth, setPosts])


    return (
        <>
            {posts?.map(item => {
                return <PostCard post={item} />
            })}

        </>
    );

};

export default LikedPosts;