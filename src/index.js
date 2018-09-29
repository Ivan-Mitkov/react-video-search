
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


//AIzaSyAkiVy4FcsBskXy6kkS1j6KrVdHJuE16WE
const API_KEY = 'AIzaSyAkiVy4FcsBskXy6kkS1j6KrVdHJuE16WE';
//create ne component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>

    )
}


//put this component on the page
ReactDOM.render(<App />, document.querySelector('.container'));

