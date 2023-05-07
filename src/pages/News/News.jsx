import React from 'react';
import PostItem from "../../components/PostItem/PostItem";
import NewsItem from "../../components/NewsItem/NewsItem";

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
                <NewsItem post={post}/>
                <NewsItem post={post}/>
                <NewsItem post={post}/>
                <NewsItem post={post}/>
                <NewsItem post={post}/>
                <NewsItem post={post}/>
            </div>
        </>
    );
};

export default News;