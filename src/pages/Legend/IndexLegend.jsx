import React, {useEffect, useState} from 'react';
import LegendCard from "../../components/LegendCard/LegendCard";
import '../../styles/Legends.css'
import LegendService from "../../API/LegendService";
import PostCard from "../../components/PostCard/PostCard";
import SmallCardLoader from "../../components/Loader/SmallCardLoader";
import WeaponCard from "../../components/WeaponCard/WeaponCard";


const IndexLegend = () => {

    const [legends, setLegends] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        LegendService.getAllLegends().then(r => {
            setLegends(r.data)
            setIsLoading(false)
        })

    }, [setLegends]);


    return (<>
            <h1 style={{textAlign: "center"}}>Персонажи</h1>
            <div className={'legends__wrapper'}>
                {isLoading ?
                    Array(10).fill(1).map(item => (
                        <SmallCardLoader/>
                    )) :
                    legends.map((item) => {
                            return <LegendCard legend={item} key={item.id}/>;
                        }
                    )
                }
            </div>
            >
        </>
    );
};

export default IndexLegend;