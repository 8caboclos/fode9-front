import React from 'react';

import './style.scss';

import VideoCard from '../video_card/';

export default function VideoGridList(props){

    const videos = [];

    for (let index = 0; index < props.videos; index++) {
        videos.push(
            <li className="video">
                <VideoCard />
            </li>
        )
    }

    return(
        <ul className="videos-list"> 
            {videos}
        </ul>
    )
}