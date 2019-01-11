import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoListing: exampleVideoData,
      singleVideo: exampleVideoData[0],
    };
  }
  onVideoClick () {
    this.setState ({
      singleVideo: exampleVideoData[4]
    });
    console.log('onVidClick');
  }
  // onVideoClick() {
  //   // this.setState ({
  //   //   // singleVideo = exampleVideoData[1]
  //   // });
  //   console.log('onVideoClick');
  // }
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
            <div><h5><em><VideoList videos={this.state.videoListing} func={this.onVideoClick}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// var VideoPlayer = (props) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>{props.video.snippet.title}</h3>
//       <div>{props.video.snippet.description}</div>
//     </div>
//   </div>
// );

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

/*
class App extends React.Component  {
  constructor(props) {
    super(props);
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
           <div><h5><em><VideoPlayer video={exampleVideoData[0]}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList videos={exampleVideoData}/></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

*/