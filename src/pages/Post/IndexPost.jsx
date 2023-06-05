import React, {useCallback, useContext, useEffect, useState} from 'react';
import PostCard from "../../components/PostCard/PostCard";
import '../../styles/Posts.css'

import Fab from '@mui/material/Fab';
import {NavLink, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import PostList from "../../components/PostList/PostList";
import {STORAGE} from "../../hooks/auth.hook";
import UnauthorizedAlert from "../../components/Alerts/UnauthorizedAlert";
import PostService from '../../API/PostService';
import EditIcon from '@mui/icons-material/Edit';
import LoaderPostCard from "../../components/Loader/LoaderPostCard";

const IndexPost = () => {
    const [posts, setPosts] = useState([]);
    const [paginator, setPaginator] = useState({})
    const auth = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    const [page, setPage] = useState(1)

    function buildQuerySearch() {
        let query = ''
        if (params.tag) {
            query = `&tag=${params.tag}`
        }
        if (params.category) {
            query = `&category=${params.category}`
        }
        if (params.author) {
            query = `&author=${params.author}`
        }
        return query
    }

    function getPostsByPage(numPage) {
        if (numPage > paginator.last_page)
            numPage = paginator.last_page
        if (numPage < 1)
            numPage = 1
        setPage(numPage)
    }


    useEffect(() => {
        PostService.getAllPosts(page, buildQuerySearch()).then(r => {
            setPosts(r.data)
            setPaginator(r.meta)
            setIsLoading(false)
        })
    }, [page, params, setPosts]);


    return (
        <>
            {auth.isAuthenticated ?
                <NavLink to={'/posts/create'}>
                    <Button className={'mt-2 btn-success'}>Создать статью<AddIcon/>
                    </Button>
                </NavLink> :
                <UnauthorizedAlert/>
            }
            <h1>Последние:</h1>
            {isLoading ?
                <div className={'posts__wrapper'}>
                    {Array(10).fill(1).map(item => (
                        <LoaderPostCard/>
                    ))}
                </div>
                : <PostList posts={posts}/>}

            {/*PAGINATOR*/}
            <div className={'container mt-5'}>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Button className="page-link" aria-label="Previous"
                                    onClick={() => getPostsByPage(1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </Button>
                        </li>
                        {page === 1 ?
                            <>
                                <li className="page-item">
                                    <Button className="page-link bg-primary text-white"
                                            onClick={() => getPostsByPage(page - 1)}>
                                        <span aria-hidden="true">{page}</span>
                                    </Button>
                                </li>

                                <li className="page-item">
                                    <Button className="page-link"
                                            onClick={() => getPostsByPage(page + 1)}>
                                        <span aria-hidden="true">{page + 1}</span>
                                    </Button>
                                </li>

                                <li className="page-item">
                                    <Button className="page-link"
                                            onClick={() => getPostsByPage(page + 2)}>
                                        <span aria-hidden="true">{page + 2}</span>
                                    </Button>
                                </li>
                            </> :
                            page === paginator.last_page ?
                                <>
                                    <li className="page-item">
                                        <Button className="page-link"
                                                onClick={() => getPostsByPage(page - 2)}>
                                            <span aria-hidden="true">{page - 2}</span>
                                        </Button>
                                    </li>

                                    <li className="page-item">
                                        <Button className="page-link"
                                                onClick={() => getPostsByPage(page - 1)}>
                                            <span aria-hidden="true">{page - 1}</span>
                                        </Button>
                                    </li>

                                    <li className="page-item">
                                        <Button className="page-link bg-primary text-white">
                                            <span aria-hidden="true">{page}</span>
                                        </Button>
                                    </li>
                                </> :
                                <>
                                    <li className="page-item">
                                        <Button className="page-link"
                                                onClick={() => getPostsByPage(page - 1)}>
                                            <span aria-hidden="true">{page - 1}</span>
                                        </Button>
                                    </li>

                                    <li className="page-item">
                                        <Button className="page-link bg-primary text-white">
                                            <span aria-hidden="true">{page}</span>
                                        </Button>
                                    </li>

                                    <li className="page-item">
                                        <Button className="page-link"
                                                onClick={() => getPostsByPage(page + 1)}>
                                            <span aria-hidden="true">{page + 1}</span>
                                        </Button>
                                    </li>
                                </>
                        }
                        <li className="page-item">
                            <Button className="page-link" aria-label="Previous"
                                    onClick={() => getPostsByPage(paginator.last_page)}>
                                <span aria-hidden="true">&raquo;</span>
                            </Button>
                        </li>


                    </ul>
                </nav>
            </div>
        </>
    );

};

export default IndexPost;