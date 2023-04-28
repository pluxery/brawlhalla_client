import React from 'react';
import PostItem from "../../components/PostItem/PostItem";
import '../../styles/Posts.css'
import BhButton from "../../components/UI/button/BhButton";
import BhLink from "../../components/UI/link/BhLink";

const Posts = () => {
    let post = {
        image: "image",
        title: "title",
        author: "author",
        date: "date",
        text: "text",
    }//это не работает пока пох
    return (
        <>
            <BhLink to={'/posts/create'}><BhButton>create post</BhButton></BhLink>
            <h1>Последние:</h1>

            <div className={'posts__wrapper'}>
                <PostItem post={post}/>
                <PostItem post={post}/>
                <PostItem post={post}/>
                <PostItem post={post}/>
                <PostItem post={post}/>
                <PostItem post={post}/>
            </div>
        </>
    );

};

export default Posts;