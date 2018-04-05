import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {term: ''} //only do this inside the constructor
    }
    render() {
        return (
            <div>
            <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }

}


export default SearchBar