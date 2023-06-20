import React, { useEffect, useState } from 'react';
import LegendCard from "../../components/LegendCard/LegendCard";
import '../../styles/Legends.css'
import LegendService from "../../API/LegendService";
import PostCard from "../../components/PostCard/PostCard";
import SmallCardLoader from "../../components/Loader/SmallCardLoader";
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import { Search } from "@mui/icons-material";
import EmptyDataAlert from '../../components/Alerts/EmptyDataAlert';


const IndexLegend = () => {

    const [legends, setLegends] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        LegendService.getAllLegends().then(r => {
            setLegends(r.data)
            setIsLoading(false)
        })

    }, [setLegends]);

    const [searchText, setSearchText] = useState('')

    const searchedLegends = legends.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())

    })


    return (<>
        <h2 style={{ textAlign: "center" }}>Персонажи</h2>
        <div className="search">
            <div
                className="search__input">
                <Search />
                <input
                    placeholder="Поиск"
                    type="text"
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
        </div>

        {isLoading ?
            <div className={'legends__wrapper'}>
                {Array(10).fill(1).map(_ => (
                    <SmallCardLoader />
                ))}
            </div>
            : searchedLegends.length === 0 ?
                <EmptyDataAlert text={"Легенд с таким именем не найдено :("} /> :
                <div className={'legends__wrapper'}>

                    {searchedLegends.map((item) => {
                        return <LegendCard legend={item} key={item.id} />;
                    }
                    )}
                </div>
        }


    </>
    );
};

export default IndexLegend;