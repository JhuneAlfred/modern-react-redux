import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        //add onClick event and calls the onVideoSelect function 
        <li onClick={() => onVideoSelect(video)} className="list-group-item video-link">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
                {video.snippet.url}
            </div>
        </li>
    )
}

export default VideoListItem