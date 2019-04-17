import React, { Component } from "react";
import "./App.css";

// updateResult function
const updateResult = (result: any) => (prevState: any) => ({
  hits: [...prevState.hits, ...result.hits],
  page: result.page,
  isLoading: false
});

const setResult = (result: any) => ({
  hits: result.hits,
  page: result.page,
  isLoading: false
});

const getHackerNewsURL = (value: string, page: string | number) =>
  `https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`;

interface State {
  hits: Array<any>;
  page: number;
  [key: string]: any;
  isLoading: boolean;
}

class App extends Component<{}, State> {
  state = {
    hits: [],
    page: 0,
    term: "",
    isLoading: false
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  initialSearch = (event: any): void => {
    event.preventDefault();

    const { term, page } = this.state;

    this.fetchStories(term, page);
  };

  onPaginatedSearch = () => {
    const { term, page } = this.state;
    // request the next page of results for the last term that was entered.
    this.fetchStories(term, page + 1);
  };

  fetchStories = (value: string, page: number | string) => {
    this.setState({ isLoading: true });
    fetch(getHackerNewsURL(value, page))
      .then(response => response.json())
      .then(result => this.onSetResult(result, page));
  };

  onSetResult = (result, page) =>
    page === 0
      ? this.setState(setResult(result))
      : this.setState(updateResult(result));
  render() {
    const { term, hits, isLoading, page } = this.state;
    return (
      <div className="App">
        <div className="searchFormContainer">
          <form onSubmit={this.initialSearch}>
            <input
              type="text"
              value={term}
              name="term"
              onChange={this.handleChange}
            />
            <button onClick={this.initialSearch}>Search Term</button>
          </form>
        </div>
        <List
          list={hits}
          page={page}
          isLoading={isLoading}
          onPaginatedSearch={this.onPaginatedSearch}
        />
      </div>
    );
  }
}

const List: React.SFC<{
  list: Array<any>;
  page: number;
  isLoading: boolean;
  onPaginatedSearch: () => void;
}> = ({ list, page, isLoading, onPaginatedSearch }) => {
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="list">
        {list.map(item => (
          <div className="listRow" key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </div>
        ))}
      </div>
      <div className="interactions">
        {page !== null && (
          <button type="button" onClick={onPaginatedSearch}>
            More Articles
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
