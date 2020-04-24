import React from 'react';

import './style.scss';

export default function VideoCard(){
    return(
        <div className="video-card">
            <div className="image-box">
                <img src="https://ci.phncdn.com/videos/201609/07/88674871/original/(m=eafTGgaaaa)(mh=Q1Ie0fcQSmtg_1ZB)8.jpg" />
                <span className="video-time">04:50</span>
            </div>
            <a className="video-card-title">Gordaça</a>
            <h1 className="video-card-views">100M</h1>
        </div>
    )
}