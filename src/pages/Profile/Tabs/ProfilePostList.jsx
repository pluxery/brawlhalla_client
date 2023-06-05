import React, {useContext, useEffect, useState} from 'react';
import PostCard from "../../../components/PostCard/PostCard";
import {useHttp} from "../../../hooks/http.hook";

import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import PostService from "../../../API/PostService";
import EmptyDataAlert from "../../../components/Alerts/EmptyDataAlert";
import {AuthContext} from "../../../context/AuthContext";
import LoaderCross from "../../../components/Loader/LoaderCross";

const ProfilePostList = () => {
    const {request} = useHttp()
    const params = useParams()
    const userId = params.id
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const auth = useContext(AuthContext)


    useEffect(() => {
        PostService.getPostsByUserId(userId)
            .then(r => {
                setPosts(r.data)
                setIsLoading(false)
            })

    }, [request, setPosts, userId]);
    return (<>
        <div className={'row'}>
            <NavLink to={'/posts/create'}>
                <Button className={'mt-2 btn-success'}>Создать статью<AddIcon/></Button>
            </NavLink>
        </div>


        {isLoading ?
            <LoaderCross/> :
            posts.length !== 0 ?
                <div className={'posts__wrapper'}>
                    {posts.map(item => (<PostCard post={item} key={item.id}/>))}
                </div>
                :
                <EmptyDataAlert text={userId === auth.user.id ? "У вас нет постов" : "У пользователя нет постов"}/>
        }

    </>);
};

export default ProfilePostList;