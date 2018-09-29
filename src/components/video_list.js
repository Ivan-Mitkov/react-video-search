import  React  from 'react';
import VideoListItem from './video_list_item';

// getting props from App/VideoList
const VideoList=(props)=>{
    // etag comes from youtube videos
    const videoItems= props.videos.map((video)=>{
        return (<VideoListItem 
                onVideoSelect={props.onVideoSelect}
                video={video}
                 key={video.etag}/>)
    })
    return(
        <ul className='col-md-4 list-group'>
            {videoItems}
        </ul>
    )
}

export default VideoList;
