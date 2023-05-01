import React, {useEffect, useState} from 'react';
import PostItem from "../../components/PostItem/PostItem";
import '../../styles/Posts.css'
import BhButton from "../../components/UI/button/BhButton";
import BhLink from "../../components/UI/link/BhLink";
import PostService from "../../API/PostService";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostService.getAllPosts().then(r => setPosts(r.data))
    }, [setPosts]);

    return (
        <>
            <BhLink to={'/posts/create'}><BhButton>create post</BhButton></BhLink>
            <h1>Последние:</h1>

            <div className={'posts__wrapper'}>
                {posts.map(item => (
                   <PostItem post={item}/>
                ))}
            </div>
        </>
    );

};

export default Posts;