
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

    }
    render() {
        return (
            <div>
                {/* create input element and pass prop onChange with the value of reference to this.onInputChange  */}
                <input
                // Controlled component
                    value={this.state.term}
                    onChange={this.onInputChange}>
                </input>
                {/* <div>Value of the input:{this.state.term}</div> */}
            </div>
        )
    }

    //declare event handler
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        // console.log(this.state);
    }

}


export default SearchBar;