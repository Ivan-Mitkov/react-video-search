
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

    }
    render() {
        return (
            <div className='search-bar'>
              
                    {/* create input element and pass prop onChange with the value of reference to this.onInputChange  */}
                    <input
                        // Controlled component
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value)}>
                    </input>
                    {/* <div>Value of the input:{this.state.term}</div> */}
              
            </div>
        )
    }

    //declare event handler
    onInputChange = (term) => {
        this.setState({ term: term });
        // console.log(this.state);
        this.props.onSearchTermChange(term);
    }

}


export default SearchBar;