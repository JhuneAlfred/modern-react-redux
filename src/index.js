import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import api_key from './constants/keys'

//create a new component. this component should produce some html
class App extends Component {
    constructor(props) {
        super(props)
        this.state = { videos: [] }
        console.log(api_key)
        YTSearch({ key: api_key, term: 'surfboards' }, (videos) => {
            console.log(videos)
            this.setState({ videos })
        })

    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}



//take this component's generated html and put if on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))