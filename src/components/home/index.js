import React from 'react';

import './style.scss';

import VideoGridList from '../_common/video_grid_list/';
import Paginator from '../_common/paginator/';

export default function Home(){
    return(
        <div className="main-container">
            <div className="videos-container">
                <h2 className="list-title">Mais assistidos do dia</h2>
                <VideoGridList videos={5} />
            </div>
            <div className="videos-container">
            <h2 className="list-title">Vídeos novos</h2>
                <VideoGridList videos={10} />
                <Paginator />
            </div>
        </div>
    )
}