import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import API_KEY from './constants/keys'

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data)
})

//create a new component. this component should produce some html
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}



//take this component's generated html and put if on the page in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))