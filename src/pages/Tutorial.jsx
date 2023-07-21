import React from 'react';
import IFrame from "../components/IFrame";
import '../styles/tutorial.css'
import {Search} from "@mui/icons-material";

const Tutorial = () => {
    return (
        <>
            <h3 className={'main__text mt-3 text-center'}>Обучение BrawlHalla</h3>
            <div className="main__text search">
                <div
                    className="search__input">
                    <Search/>
                    <input
                        placeholder="Введите название ролика для обучания"
                        type="text"
                    />
                </div>
            </div>

            <div className={'tutorial__wrapper'}>
                <IFrame text={'Туториал на меч'} refYoutube={'https://www.youtube.com/embed/Awn0H9PADNI'}/>
                <IFrame text={'Туториал на копье'} refYoutube={'https://www.youtube.com/embed/7_XfcvE0d8w'}/>
                <IFrame text={'Туториал на косу'} refYoutube={'https://www.youtube.com/embed/Plx6q9bbbpI'}/>
                <IFrame text={'Туториал на пушку'} refYoutube={'https://www.youtube.com/embed/0uUrf5hp2B0'}/>
                <IFrame text={'Туториал на катары'} refYoutube={'https://www.youtube.com/embed/IYQGOqYfqMM'}/>
                <IFrame text={'Туториал на молот'} refYoutube={'https://www.youtube.com/embed/wha8Nx57Rjk'}/>
                <IFrame text={'Туториал на пистолеты'} refYoutube={'https://www.youtube.com/embed/Fsl-JGAGEjg'}/>
                <IFrame text={'Туториал на перчатки'} refYoutube={'https://www.youtube.com/embed/0wrF4qOkmGk'}/>

                <IFrame text={'Туториал на меч'} refYoutube={'https://www.youtube.com/embed/wha8Nx57Rjk'}/>
                <IFrame text={'Туториал на меч'} refYoutube={'https://www.youtube.com/embed/wha8Nx57Rjk'}/>
                <IFrame text={'Туториал на меч'} refYoutube={'https://www.youtube.com/embed/wha8Nx57Rjk'}/>
                <IFrame text={'Туториал на меч'} refYoutube={'https://www.youtube.com/embed/wha8Nx57Rjk'}/>
            </div>
        </>
    );
};

export default Tutorial;