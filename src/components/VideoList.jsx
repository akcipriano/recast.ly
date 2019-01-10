import exampleVideoData from './exampleVideoData.js';
var VideoList = () => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em> view goes here</h5>{exampleVideoData[0].snippet.title}</div>
    <div><h5><em>videoListEntry</em> view goes here</h5>{exampleVideoData[1]}</div>
    <div><h5><em>videoListEntry</em> view goes here</h5>{exampleVideoData[2]}</div>
    <div><h5><em>videoListEntry</em> view goes here</h5>{exampleVideoData[3]}</div>
    <div><h5><em>videoListEntry</em> view goes here</h5>{'Hello'}</div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
