import React from 'react'
import './Loader.css'



export default function Loader() {

    return (
        <div className={'centerLoad'}>
            <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"/>
                <div className="cssload-cube cssload-c2"/>
                <div className="cssload-cube cssload-c4"/>
                <div className="cssload-cube cssload-c3"/>
            </div>
        </div>
    )
}