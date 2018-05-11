class Search extends React.Component { 
  constructor(props) {
    super(props);
    // this.state = {searchVal: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // this.setState({searchVal: event.target.value})
    this.props.searchDebounce(event.target.value)
  }
  
 
  render() {
    return (
      <div className="search-bar form-inline">
        <input 
          className="form-control"
          type="text"
          // value={this.state.searchVal}
          onChange={this.handleChange}/>
      </div> 
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
// <button className="btn hidden-sm-down" init={this.props.search(this.state.searchVal)}>    </button>
// <span className="glyphicon glyphicon-search"></span>