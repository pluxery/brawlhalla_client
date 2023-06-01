import React, {useEffect, useState} from 'react';
import PostCard from "../../../components/PostCard/PostCard";
import {useHttp} from "../../../hooks/http.hook";

import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import PostService from "../../../API/PostService";
import Loader from "../../../components/Loader/Loader";

const ProfilePostList = () => {
    const {request} = useHttp()
    const params = useParams()
    const userId = params.id
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
                    <>
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> :
                            posts.length !== 0 ?
                            <div className={'posts__wrapper'}>
                                {posts.map(item => (<PostCard post={item} key={item.id}/>))}
                            </div>
                    :
                    <h3>Нет постов</h3>
                    }

        </>);
};

export default ProfilePostList;