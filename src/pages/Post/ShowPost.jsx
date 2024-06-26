import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Button} from 'react-bootstrap';
import '../../styles/PostShow.css'
import Loader from "../../components/Loader/Loader";
import {AuthContext} from "../../context/AuthContext";
import CommentCard from "../../components/CommentCard/CommentCard";
import UnauthorizedAlert from "../../components/Alerts/UnauthorizedAlert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import {pink} from "@mui/material/colors";
import ProfileCard from "../../components/AuthorSidebar/ProfileCard";
import PostService from '../../API/PostService';
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

function CrossLoader() {
    return null;
}

const ShowPost = () => {

    const auth = useContext(AuthContext)
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState(
        {
            text: '',
            description: '',
            content: '',
            category: {},
            tags: [],
            author: {},
            likes: [],
            comments: [],
            created_at: ''
        });

    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)

    const [form, setForm] = useState({text: null})

    const [countLikes, setCountLikes] = useState(0);

    const changeInputHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    useEffect(() => {
        PostService.getPostById(id).then(r => {
            setPost(r.data)
            setLoading(false)
            setIsLiked(userIsLikedPost(r.data.likes))
            setCountLikes(r.data.likes.length)
        })
    }, [setIsLiked, id, setPost, auth.user.id]);

    function userIsLikedPost(likes) {
        for (let i = 0; i < likes.length; i++) {
            // console.log(`i=${i} => ${likes[i].id} === ${auth.user.id}`)
            if (likes[i].id === auth.user.id) {
                return true
            }
        }
        return false
    }

    const deletePostOnclick = async (e) => {
        await PostService.deletePostById(post.id, auth.token)
        navigate(-1)
    }

    const addCommentOnClick = async (e) => {
        await PostService.addComment(post.id, form, auth.token)
        window.location.reload();
    }

    const toggleLikeOnClick = async (e) => {
        await PostService.toggleLikePost(post.id, auth.token)
        setIsLiked(!isLiked)
        setCountLikes(isLiked ? countLikes - 1 : countLikes + 1)
    }


    if (loading) {
        return <CrossLoader/>
    } else {
        return (
            <>
                <div className="header">
                    <h2>{post.title}</h2>
                </div>
                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <h5>{post.category?.name}</h5>
                            <h5>{post.created_at}</h5>
                            <div className="fakeimg">
                                <img
                                    src={!post.image ? '...' : post.image}
                                    className="card-img-top rounded mx-auto d-block" alt="..."
                                    style={{height: 420, width: 680}}/>
                            </div>
                            <p>{post.content}</p>
                        </div>

                        <div>
                            {
                                auth.isAuthenticated ? <>
                                    <div className="container text-end">
                                        <span onClick={toggleLikeOnClick}>
                                            <i>{countLikes}</i>
                                            {isLiked ?
                                                <Fab disabled aria-label="like" className={"m-2"}>
                                                    <FavoriteIcon sx={{color: pink[500]}}/>
                                                </Fab>
                                                :
                                                <Fab disabled aria-label="like" className={"m-2"}>
                                                    <FavoriteIcon/>
                                                </Fab>
                                            }
                                        </span>
                                    </div>
                                    <div className="card">
                                        <h5 className="card-header">{auth.user.name}</h5>
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <textarea className="form-control"
                                                          rows='3'
                                                          id={'text'}
                                                          name={'text'}
                                                          placeholder={'Поделитесь вашем мнением'}
                                                          value={form.text}
                                                          onChange={changeInputHandler}>
                                                </textarea>
                                            </div>
                                            <Button className={'btn-success'} onClick={addCommentOnClick}>
                                                Оставить комментарий
                                            </Button>
                                        </div>
                                    </div>
                                </> : <UnauthorizedAlert/>

                            }
                            {post.comments.map(item => {
                                return <CommentCard comment={item}/>
                            })}

                        </div>


                    </div>
                    <div className="rightcolumn">
                        <ProfileCard author={post.author}/>
                        {post.author.id === auth.user.id ?

                            <div className="card">
                                <div className="container text-center">
                                    <div className="row align-items-start">
                                        <div className="col">
                                            <Fab color="error" aria-label="delete" onClick={deletePostOnclick}>
                                                <DeleteIcon/>
                                            </Fab>
                                        </div>
                                        <div className="col">
                                            <NavLink to={`/posts/${post.id}/edit`}>
                                                <Fab color="success" aria-label="edit">
                                                    <EditIcon/>
                                                </Fab>
                                            </NavLink>
                                        </div>
                                        <div className="col">
                                            <NavLink to={`/posts/create`}>
                                                <Fab color='primary' aria-label="create">
                                                    <AddIcon/>
                                                </Fab>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div> : null}

                        <div className="card">
                            <h3>Popular Post</h3>
                            <div className="fakeimg">Image</div>
                            <div className="fakeimg">Image</div>
                            <div className="fakeimg">Image</div>
                        </div>

                    </div>
                </div>

            </>
        );
    }
};

export default ShowPost;