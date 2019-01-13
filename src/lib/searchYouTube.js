var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: true,
      key: options.key,
      type: 'video'
    },
    success: function (data) {
      return callback(data.items);
    }
  });
};

export default searchYouTube;