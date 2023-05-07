import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {Button} from 'react-bootstrap';
import '../../styles/PostShow.css'
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";

const PostShow = () => {
    const params = useParams();
    const postId = params.id;
    const [post, setPost] = useState({});
    const {request, loading} = useHttp()
    useEffect(() => {
        async function getPostById() {
            return await request(`http://127.0.0.1:8000/api/posts/${postId}`)
        }

        getPostById().then(r => setPost(r.data))
    }, [setPost]);


    if (loading) {
        return <Loader/>
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
                                    src="https://cdn2.unrealengine.com/atla-productart-1920x1080-1920x1080-477cda5a5a30.jpg"
                                    className="card-img-top rounded mx-auto d-block" alt="..."
                                    style={{height: 420, width: 680}}/>
                            </div>
                            <p>{post.content}</p>
                        </div>

                        <div>
                            {post.comments?.map(item => (
                                <div className="card">
                                    <div className="card-header">
                                        {item.created_at}
                                    </div>
                                    <div className="card-body">
                                        <NavLink to={`/profile/${item.author?.id}`}>
                                            <h5 className="card-title">{item.author?.name}</h5>
                                        </NavLink>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className="rightcolumn">
                        <div className="card">
                            <h3>{post.author?.name}</h3>
                            <img
                                src={'https://play-lh.googleusercontent.com/PZeSw1BuUf8swSbIxF3JNE0t-_4My6hbhdnCLucQZgYLrSe0IDaAMi4r83g6drKg2knm'}
                                alt={'...'} style={{
                                width: 100, height: 100
                            }}
                                className={'rounded mx-auto d-block'}/>
                            <p>{post.author?.email}</p>
                            <NavLink to={`/profile/${post.author?.id}`}>
                                <Button className={'btn-success'}>Go to profile</Button>
                            </NavLink>
                        </div>
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

export default PostShow;