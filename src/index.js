import React from 'react'
import ReactDOM from 'react-dom'

//create a new component. this component should produce some html
const App = function() {
    return <div>Hello!</div>
}



//take this component's generated html and put if on the page in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'))