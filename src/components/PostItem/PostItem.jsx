import React from 'react';
import BhLink from "../UI/link/BhLink";


const PostItem = ({post}) => {
    return (
        <div className={'post__wrapper'}>
            <div className={'post__img_wrapper'}>
                <img src={"post.image"} alt={'img not found'}/>
            </div>

            <div className={"post__text_wrapper"}>

                <div className={'post__title'}>
                    <BhLink to={`/posts/${post.id}`}><h4>{post.title}</h4></BhLink>
                    <div>
                        <span style={{marginRight: 10}}>{post.created_at}</span>
                        <span>{post.author.name}</span>
                    </div>
                </div>

                <div className={'post__content'}>
                    {post.content}
                </div>
            </div>
        </div>
    );
};

export default PostItem;