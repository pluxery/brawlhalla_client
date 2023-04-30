import React from 'react';
import LegendItem from "../components/LegendItem/LegendItem";
import '../styles/Legends.css'

const Legends = () => {
    return (<>
            <h1 style={{textAlign: "center"}}>Legends:</h1>
            <div className={"legends__wrapper"}>
                     <LegendItem/>
            </div>
        </>
    );
};

export default Legends;