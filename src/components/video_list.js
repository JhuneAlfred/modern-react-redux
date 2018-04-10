import React, { Component } from 'react'
import VideoListItem from './video_list_item'

//function based type
const VideoList = (props) => {
    const videoItems = props.videos.map(video => {
        return <VideoListItem key={video.etag} video={video} />
    })

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

//Or you can also use a class based type below with the difference in line 19
//we used this.props... instead of props...
// class VideoList extends Component {
//     render(props) {
//         return (
//             <ul className="col-md-4 list-group">
//                 {this.props.videos.map(video => {
//                     return video.snippet.title
//                 })}
//             </ul>
//         )
//     }
// }

export default VideoList