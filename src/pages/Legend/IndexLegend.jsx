import React, {useEffect, useState} from 'react';
import LegendCard from "../../components/LegendCard/LegendCard";
import '../../styles/Legends.css'
import LegendService from "../../API/LegendService";
import PostCard from "../../components/PostCard/PostCard";


const IndexLegend = () => {

    const [legends, setLegends] = useState([]);

    useEffect(() => {
        LegendService.getAllLegends().then(r => setLegends(r.data))
    }, [setLegends]);


    return (<>
            <h1 style={{textAlign: "center"}}>Персонажи</h1>
            <div className={'legends__wrapper'}>
                {legends.map(item => (
                    <LegendCard legend={item} key={item.id}/>
                ))}
            </div>
            >
        </>
    );
};

export default IndexLegend;