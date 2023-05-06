import React, {useState} from 'react';
import '../../styles/Start.css';
import fon from '../../images/fon.jpg'
import Login from "./Login";
import Register from "./Register";
import {NavLink} from "react-router-dom";
import BhLink from "../../components/UI/link/BhLink";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';



const StartPage = () => {
    const[show, setShow] = useState(false);

    return (
        <React.Fragment>
             <div className="start">
                    <div className="start__box">
                        {show ? <Login /> :  <Register/>}
                        <div className="start__switch">
                            {show ? <p>Нет аккаунта?</p> : <p>Уже есть аккаунт? </p>}
                            <button className="Button" onClick={() => setShow(!show)} >
                                {show ? <ArrowCircleRightOutlinedIcon/> : <ArrowCircleLeftOutlinedIcon/> }
                            </button>
                        </div>
                        {/*todo подровнять ссылку*/}
                        <NavLink to={'/posts'} className={"start__link"}><p>Продолжить как гость</p></NavLink>
                    </div>

                    <div className="start_img">
                        <img src={fon} />
                    </div>
             </div>

        </React.Fragment>
    );
};

export default StartPage;