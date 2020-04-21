import React from 'react';
import table from '../api/table';
import SearchBar from './SearchBar';
import TableList from './TableList';

class App extends React.Component {
  state = { tables: [] };

  onSearchSubmit = async (term,date) => {
    const response = await table.get('/search', {
        params: {
                 query:term,date
        }
    });

    this.setState({ tables: response.data});
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <TableList table={this.state.tables} />
      </div>
    );
  }
}

export default App;