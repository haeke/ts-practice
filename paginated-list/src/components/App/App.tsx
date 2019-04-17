import React, { Component } from "react";
import "./App.css";

// updateResult function
const updateResult = (result: any) => (prevState: any) => ({
  hits: [...prevState.hits, ...result.hits],
  page: result.hits
});

const setResult = (result: any) => ({
  hits: result.hits,
  page: result.page
});

const getHackerNewsURL = (value: string, page: string | number) =>
  `https://hn.algolia.com/api/v1/search?query=${value}&page=${page}&hitsPerPage=100`;

interface State {
  hits: Array<any>;
  page: number;
  [key: string]: any;
}

class App extends Component<{}, State> {
  state = {
    hits: [],
    page: 0,
    term: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  initialSearch = event => {
    event.preventDefault();

    const { term, page } = this.state;

    this.fetchStories(term, page);
  };

  fetchStories = (value: string, page: number | string) =>
    fetch(getHackerNewsURL(value, page))
      .then(response => response.json())
      .then(result => this.onSetResult(result, page));

  onSetResult = (result, page) =>
    page === 0
      ? this.setState(setResult(result))
      : this.setState(updateResult(result));
  render() {
    const { term } = this.state;
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
      </div>
    );
  }
}

export default App;
