import React, {Component} from 'react';
import qqq from './qqq.mp4';
import pngwing from './pngwing.com.png'
import './Welcome.css'

class Welcome extends Component {
    render() {
        return (
            // <div>
            //     <video src={qqq} autoPlay loop muted/>
            //     <div className="content">
            //         <img src={pngwing}/>
            //         <h1 >Приветствуем всех на нашем сайте!</h1>
            //     </div>
            // </div>
            <>
                <video src={qqq} autoPlay loop muted/>
                <div className="container">
                    <div className="row">
                        <div className="col text-center"
                             style={{position: "fixed", zIndex: 10000, top: 100}}>
                            <img src={pngwing} className="img-fluid mx-auto" alt="Image"
                                 style={{width: 600, height: 200}}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Welcome;