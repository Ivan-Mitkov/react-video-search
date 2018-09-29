import React, { Component } from 'react';



const VideoListItem = ({ video,onVideoSelect }) => {
    // to access the video props.video
    // const video = props.video;
    const imageUrl=video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={()=>onVideoSelect(video)} className='list-group-item'>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} alt=""/>
                </div>
                <div className='media-body'>
                    <div className='media-heading'>
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;
