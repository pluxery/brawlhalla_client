import React from 'react';

const StatItem = ({size, name}) => {

    function getIconByName(file_name, path = '') {
        return process.env.PUBLIC_URL + `/stats/${path + file_name}.jpg`

    }

    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                index <= size ?
                    <img src={getIconByName(name)}
                         style={{width: "2rem", height: '2rem'}}
                         alt={'image not found'}/> :

                    <img src={getIconByName(name, 'black_white_images/')}
                         style={{width: "2rem", height: '2rem'}}
                         alt={'image not found'}/>
            ))}
        </>


    );
};

export default StatItem;