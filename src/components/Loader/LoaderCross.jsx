import React from 'react';

const LoaderCross = () => {
    return (
        <div className="m-5 text-center">
            <img src={'/stickers/cross-wait.png'}
                 style={{width: 100, height: 100}}
                 alt={'Loading'}/>
            <div className="spinner-grow spinner-grow-sm m-1" role="status">
            </div>
            <div className="spinner-grow spinner-grow-sm m-1" role="status">
            </div>
            <div className="spinner-grow spinner-grow-sm m-1" role="status">
            </div>

        </div>
    );
};

export default LoaderCross;