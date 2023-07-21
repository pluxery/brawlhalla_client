import React, {Component} from 'react';
import '../../styles/Welcome.css'


class Welcome extends Component {
    render() {
        return (
            <>
                <video className="video_welcome" src={'/welcome_video.mp4'} autoPlay loop muted/>
                <div className="container">
                    <div className="row">
                        <div className="col text-center "
                             style={{position: "fixed", zIndex: 10000, top: 200, right: 0}}>
                            <img  src={'/bh_logo.png'} className="img-fluid mx-auto img_start" alt="Image"
                                 style={{width: 600, height: 200, }}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Welcome;