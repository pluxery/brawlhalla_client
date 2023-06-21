import React, {useContext, useEffect, useState} from 'react';
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import '../../styles/Weapons.css'
import {useHttp} from "../../hooks/http.hook";
import Loader from "../../components/Loader/Loader";
import LoaderPostCard from "../../components/Loader/LoaderPostCard";
import SmallCardLoader from "../../components/Loader/SmallCardLoader";

const IndexWeapon = () => {

    const [weapons, setWeapons] = useState([]);
    const {request, loading} = useHttp()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getAllWeapons() {
            return await request('/weapons')
        }

        getAllWeapons().then(r => {
            setWeapons(r.data)
            setIsLoading(false)

        })

    }, [request, setWeapons]);

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Персонажи</h2>

            <div className={'weapons__wrapper'}>
                {isLoading ?
                    Array(10).fill(1).map(item => (
                        <SmallCardLoader/>
                    )) :
                    weapons.map((item) => {
                            return <WeaponCard weapon={item} key={item.id}/>;
                        }
                    )
                }
            </div>
        </>
    );
};

export default IndexWeapon;