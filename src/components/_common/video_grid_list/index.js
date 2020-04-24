import React from 'react';

import './style.scss';

import VideoCard from '../video_card/';

export default function VideoGridList(){
    return(
        <ul className="videos-list"> 
            <li className="video">
                <VideoCard />
            </li>
            <li className="video">
                <VideoCard />
            </li>
            <li className="video">
                <VideoCard />
            </li>
            <li className="video">
                <VideoCard />
            </li>
            <li className="video">
                <VideoCard />
            </li>
        </ul>
    )
}