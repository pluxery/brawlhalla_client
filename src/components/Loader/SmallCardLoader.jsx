import React from 'react';
import {NavLink} from "react-router-dom";

const SmallCardLoader = () => {
    return (

        <div className="card">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <span className="spinner-border text-success m-5 p-1"></span>
                </div>
            </div>
            <div className={'container text-center  card-text placeholder-glow'}>
                <span className="placeholder col-7"></span>
            </div>

            <button className="btn btn-success" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status"
                                                  aria-hidden="true"></span>

            </button>
        </div>
    );
};

export default SmallCardLoader;