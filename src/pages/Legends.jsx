import React from 'react';
import LegendItem from "../components/LegendItem/LegendItem";
import '../styles/Legends.css'

const Legends = () => {
    return (<>
            <h1>Legends:</h1>
            <div className={"legends__wrapper"}>
                {Array(50).fill(1).map(() => {
                    return <LegendItem/>;
                })}
            </div>
        </>
    );
};

export default Legends;