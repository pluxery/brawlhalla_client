import React from 'react';
import PostCard from "../PostCard/PostCard";
import '../../styles/Posts.css'
const PostList = ({posts}) => {
    return (
        <div className={'posts__wrapper'}>
            {posts.map(item => (
                <PostCard post={item} key={item.id}/>
            ))}
        </div>
    );
};

export default PostList;