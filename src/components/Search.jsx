import App from './App.js';
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.onUserInputChange}/>
    <button className="btn hidden-sm-down" onClick={() => props.updateSearch()}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


// submitSearch (topic) {
//   var searchedVideo = {
//     query: topic,
//     max: 5,
//     key: YOUTUBE_API_KEY
//   };

//   this.props.searchYouTube(searchedVideo, (data) => {
//     this.setState({
//       singleVideo: data[0],
//       videoListing: data
//     });
//   });
// }

// onClick={() => props.titleClick(props.video)}