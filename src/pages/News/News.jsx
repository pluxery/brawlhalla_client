import React from 'react';
import PostCard from "../../components/PostCard/PostCard";
import NewsCard from "../../components/NewsCard/NewsCard";

const News = () => {
    let post = {
        image: "image",
        title: "title",
        author: "author",
        date: "date",
        text: "text",
    }//это не работает пока пох
    return (
        <>
            <h1>Новости:</h1>
            <div className={'posts__wrapper'}>
                <NewsCard post={post}/>
                <NewsCard post={post}/>
                <NewsCard post={post}/>
                <NewsCard post={post}/>
                <NewsCard post={post}/>
                <NewsCard post={post}/>
            </div>
        </>
    );
};

export default News;