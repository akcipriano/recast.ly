import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListing: [],
      singleVideo: exampleVideoData[0],
      object: {
        q: 'pets',
        maxResults: 5,
        key: YOUTUBE_API_KEY
      }
    };
  }

  componentDidMount () {
    console.log('Component did mount');
    searchYouTube(this.state.object, function () {
      this.setState ({
        videoListing: data
      });
    });
  }

  // data: {
  //   part: 'snippet',
  //   q: options.query,
  //   maxResults: options.max,
  //   videoEmbeddable: true,
  //   key: options.key,
  //   type: 'video'
  // },

  // var searchYouTube = (options, callback) => {
  //   $.ajax({
  //     url: 'https://www.googleapis.com/youtube/v3/search',
  //     type: 'GET',
  //     data: {
  //       part: 'snippet',
  //       q: options.query,
  //       maxResults: options.max,
  //       videoEmbeddable: true,
  //       key: options.key,
  //       type: 'video'
  //     },
  //     success: function (data) {
  //       return callback(data.items);
  //     }
  //   });


  onVideoClick (video) {
    this.setState ({
      singleVideo: video
    });
    console.log('onVidClick');
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.singleVideo}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={this.state.videoListing} titleClick={this.onVideoClick.bind(this)}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]}/></em></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em><VideoList videos={exampleVideoData}/></em></h5></div>

//       </div>
//     </div>
//   </div>
// );