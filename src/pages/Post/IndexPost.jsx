import React, { useCallback, useContext, useEffect, useState } from 'react';
import PostCard from "../../components/PostCard/PostCard";
import '../../styles/Posts.css'


import { NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import PostList from "../../components/PostList/PostList";
import { STORAGE } from "../../hooks/auth.hook";
import UnauthorizedAlert from "../../components/UnauthorizedAlert";
import PostService from '../../API/PostService';

const IndexPost = () => {
    const [posts, setPosts] = useState([]);
    const [paginator, setPaginator] = useState({})
    const auth = useContext(AuthContext)
    const [load, setLoad] = useState(true)
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

    const lastPageOnClick = async (e) => {
        e.preventDefault()
        setPage(paginator.last_page);
    }
    const firstPageOnClick = async (e) => {
        e.preventDefault()
        setPage(1);
    }

    const nextPageOnClick = async (e) => {
        e.preventDefault()
        setPage((page) => {
            if (page >= paginator.last_page) {
                return paginator.last_page;
            }
            return page + 1
        })
    }
    const prevPageOnClick = async (e) => {
        e.preventDefault()
        setPage((page) => {
            if (page <= 1) {
                return 1;
            }
            return page - 1
        })
    }

    useEffect(() => {
        PostService.getAllPosts(page, buildQuerySearch()).then(r => {
            setPosts(r.data)
            setPaginator(r.meta)
            setLoad(false)
        })
    }, [page, params, setPosts]);


    if (load) {
        return <Loader />
    } else {
        return (
            <>
                {auth.isAuthenticated ?
                    <NavLink to={'/posts/create'}>
                        <Button className={'mt-2 btn-success'}>Создать статью<AddIcon />
                        </Button>
                    </NavLink> :
                    <UnauthorizedAlert />
                }
                <h1>Последние:</h1>
                <PostList posts={posts} />

                <div className={'container mt-5'}>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <Button className="page-link" aria-label="Previous"
                                    onClick={firstPageOnClick}>
                                    <span aria-hidden="true">&laquo;</span>
                                </Button>
                            </li>
                            {page > 2 ?
                                <li className="page-item">
                                    <Button className="page-link"
                                        onClick={prevPageOnClick}>
                                        <span aria-hidden="true">{page - 1}</span>
                                    </Button>
                                </li> : null
                            }
                            <li className="page-item">
                                <Button className="page-link bg-primary text-white">
                                    <span aria-hidden="true">{page}</span>
                                </Button>
                            </li>
                            {page < paginator.last_page ?
                                <li className="page-item">
                                    <Button className="page-link"
                                        onClick={nextPageOnClick}>
                                        <span aria-hidden="true">{page + 1}</span>
                                    </Button>
                                </li> : null
                            }
                            <li className="page-item">
                                <Button className="page-link" aria-label="Next"
                                    onClick={lastPageOnClick}>
                                    <span aria-hidden="true">&raquo;</span>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        );
    }
};

export default IndexPost;