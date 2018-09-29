
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
import API_KEY from './constants';

//create ne component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        videos: [],
        selectedVideo:null
        };
        this.videoSearch('us');
        
    }
    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (data) => {
            this.setState({ videos: data,
               selectedVideo:data[0] }) });
    }
    render() {
        //slowing down search
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)
        return (
            < div >
                <SearchBar onSearchTermChange={videoSearch}/>
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

