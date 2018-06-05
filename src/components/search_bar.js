import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
      super(props);
      this.state = { term: '' };
  }


  render(){
    return (
          <div className="search-bar input-group input-group-lg">
          <input
            value={this.state.term}
           onChange = {event => this.onInputChange(event.target.value)} class="form-control" aria-label="large" placeholder="Search"/>
          </div>
    );
  }

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
