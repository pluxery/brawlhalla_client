import React from 'react';
import PostCard from "../../components/PostCard/PostCard";
import NewsCard from "../../components/NewsCard/NewsCard";
import {Alert, AlertTitle} from "@mui/material";


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

            {/*<Alert severity="error">*/}
            {/*    <AlertTitle>Error</AlertTitle>*/}
            {/*    This is an error alert — <strong>check it out!</strong>*/}
            {/*</Alert>*/}
            {/*<Alert severity="warning">*/}
            {/*    <AlertTitle>Warning</AlertTitle>*/}
            {/*    This is a warning alert — <strong>check it out!</strong>*/}
            {/*</Alert>*/}
            {/*<Alert severity="info">*/}
            {/*    <AlertTitle>Info</AlertTitle>*/}
            {/*    This is an info alert — <strong>check it out!</strong>*/}
            {/*</Alert>*/}
            {/*<Alert severity="success">*/}
            {/*    <AlertTitle>Success</AlertTitle>*/}
            {/*    This is a success alert — <strong>check it out!</strong>*/}
            {/*</Alert>*/}
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