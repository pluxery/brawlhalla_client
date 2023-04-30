import React from 'react';


const PostItem = (post) => {
    return (
        <div className={'post__wrapper'}>
            <div className={'post__img_wrapper'}>
                <img src={post.image} alt={'img not found'}/>
            </div>

            <div className={"post__text_wrapper"}>

                <div className={'post__title'}>
                    <h4>{post.title}title</h4>
                    <div>
                        <span style={{marginRight: 10}}>{post.date}date</span>
                        <span>{post.author}author</span>
                    </div>
                </div>

                <div className={'post__content'}>
                    {/*post.text*/}
                    Get ready for the first ever rounds of Volleybrawl Triples featured as the Brawl of the Week! Hit
                    the stadium’s sands in teams of 3 to compete for the love of this newest Game Mode. This week Thea
                    sprints into the...
                    Get ready for the first ever rounds of Volleybrawl Triples featured as the Brawl of the Week! Hit
                    the stadium’s sands in teams of 3 to compete for the love of this newest Game Mode. This week Thea
                    sprints into the...

                </div>
            </div>
        </div>
    );
};

export default PostItem;