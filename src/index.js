
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


//AIzaSyAkiVy4FcsBskXy6kkS1j6KrVdHJuE16WE
const API_KEY = 'AIzaSyAkiVy4FcsBskXy6kkS1j6KrVdHJuE16WE';


//create ne component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        videos: [],
        selectedVideo:null
        };

        YTSearch({ key: API_KEY, term: "stock exchange" }, (data) => {
             this.setState({ videos: data,
                selectedVideo:data[0] }) });
    }
    render() {
        return (
            < div >
                <SearchBar />
                {/* passing selected video */}
                <VideoDetail video={this.state.selectedVideo}/>
                {/* passing props to videoList */}
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div > 
        )
    }
}


//put this component on the page
ReactDOM.render(<App />, document.querySelector('.container'));

