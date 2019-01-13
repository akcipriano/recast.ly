import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListing: [],
      singleVideo: {
        id: {
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: ''
            }
          }
        }
      }
    };
  }

  componentDidMount () {
    var firstVideo = {
      query: 'pets',
      max: 5,
      key: YOUTUBE_API_KEY
    };

    this.props.searchYouTube(firstVideo, (data) => {
      this.setState({
        singleVideo: data[0],
        videoListing: data
      });
    });
  }

  onVideoClick (video) {
    this.setState ({
      singleVideo: video
    });
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