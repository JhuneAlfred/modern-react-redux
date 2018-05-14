import _ from 'lodash'
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
    //component level state
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('full stack development')
  }

  videoSearch(term) {
    YTSearch({ key: keys.youTubeID, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} //Passes function to VideoList
          videos={this.state.videos}
        />
      </div>
    )
  }
}

//take this component's generated html and put if on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'))
