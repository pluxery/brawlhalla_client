import React from 'react';

const IFrame = ({text = 'guide name', refYoutube}) => {
    return (
        <div className="card mb-2 text-center" style={{width: "20rem", height: "16rem"}}>
            <iframe width="270" height="210" src={refYoutube} className={'align-content-center'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
            </iframe>
            <span className={'mt-3 font-monospace'} style={{
                fontSize: '20px'
            }}>{text}</span>
        </div>
    );
};

export default IFrame;