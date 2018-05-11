// var videoCollection = window.exampleVideoData;

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.searchDebounce = _.debounce(this.search.bind(this), 500)
  }
  componentDidMount() {
    this.search('')
  }
  changeVideo(input) {
    this.setState({
      currentVideo: input
    });
  }

  search(text) {
    var test = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'part': 'snippet',
        'q': text,
        'type': 'video',
        'videoEmbeddable': 'true',
        'autoplay': 1,
        'key': window.YOUTUBE_API_KEY
      },
      success: function(data) {
        console.log(data);
        if(data.items.length >= 5) {
          test.setState({
            videos: data.items,
            currentVideo: data.items[0]
          })
        }
      }
    })

  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchDebounce={this.searchDebounce} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} item={this.changeVideo} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
