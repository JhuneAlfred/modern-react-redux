import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import keys from './constants/keys'

//create a new component. this component should produce some html
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }

        console.log(keys)

        YTSearch({ key: keys.youTubeID, term: 'alfredo' }, (videos) => {
            console.log(videos)
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })

    }

    render() {
        return (
            <div>
                {/* <SearchBar /> */}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })} //Passes function to VideoList
                    videos={this.state.videos} />
            </div>
        )
    }
}



//take this component's generated html and put if on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))