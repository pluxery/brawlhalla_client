import React from 'react';
import PostItem from "../components/PostItem/PostItem";
import '../styles/Posts.css'

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