import React, {useEffect, useState} from 'react';
import LegendItem from "../components/LegendItem/LegendItem";
import '../styles/Legends.css'
import LegendService from "../API/LegendService";
import PostItem from "../components/PostItem/PostItem";


const Legends = () => {

    const [legends, setLegends] = useState([]);

    useEffect(() => {
        LegendService.getAllLegends().then(r => setLegends(r.data))
    }, [setLegends]);


    return (<>


            <h1 style={{textAlign: "center"}}>Legends:</h1>
            <div className={'legends__wrapper'}>
                {legends.map(item => (
                    <LegendItem legend={item} key={item.id}/>
                ))}
            </div>
        >
        </>
    );
};

export default Legends;