import React from 'react';
class SearchBar extends React.Component {
  state = { term: '' ,  date:null   };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term,this.state.date);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              placeholder="Enter ETF name"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <input
              type="date"
              value={this.state.date}
              placeholder="Enter date"
              onChange={e => this.setState({ date: e.target.value })}
            />
            
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;