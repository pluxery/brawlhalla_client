import React from 'react';
import './NewsItem.css'

const NewsItem = (news) => {
    return (
        <div className={'post__wrapper'}>
            <div className={'post__img_wrapper'}>
                <img src={news.image} alt={'img not found'}/>
            </div>

            <div className={"post__text_wrapper"}>

                <div className={'post__title'}>
                    <h4>{news.title}New Patch 7.16</h4>
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

export default NewsItem;