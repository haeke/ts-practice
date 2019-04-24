import React, { Component } from "react";

import CompoundInputField from "../CompoundInputField/CompoundInputField";
import Table from "../Table/Table";

interface BookSiteInterface {
  title: string;
  author: string;
  ISBN: string;
}

interface State {
  title: string;
  author: string;
  ISBN: string;
  books: Array<BookSiteInterface>;
}

class BookSite extends Component<{}, State> {
  state = {
    title: "",
    author: "",
    ISBN: "",
    books: []
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    } as any);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, author, ISBN, books } = this.state;
    let newBook: BookSiteInterface = { title, author, ISBN };
    this.setState({
      title: "",
      author: "",
      ISBN: "",
      books: [...books, newBook]
    });
  };
  render() {
    const { title, author, ISBN } = this.state;
    return (
      <section className="col-md-6 mx-auto">
        <CompoundInputField
          labelName="Title"
          inputName="title"
          inputValue={title}
          inputType="text"
          placeholderName="The Title of the Book"
          inputDescription="The Title is the name of the book."
          handleChange={this.handleChange}
        />
        <CompoundInputField
          labelName="Author"
          inputName="author"
          inputValue={author}
          inputType="text"
          placeholderName="Book Author"
          inputDescription="The Author is the one who wrote the book."
          handleChange={this.handleChange}
        />
        <CompoundInputField
          labelName="ISBN"
          inputName="ISBN"
          inputValue={ISBN}
          inputType="text"
          placeholderName="Books ISBN"
          inputDescription="The ISBN is a quick way to look up a book."
          handleChange={this.handleChange}
        />
        <button
          type="button"
          onClick={this.handleSubmit}
          className="btn btn-primary"
        >
          Add Book
        </button>
        {/* The Table component takes in the header and an array of the table headers that correspond to the table data that you want to display. */}
        <Table
          tableHeader="List Of Books"
          headerTitles={[
            { title: "Title", id: 1 },
            { title: "Author", id: 2 },
            { title: "ISBN", id: 3 }
          ]}
        >
          {this.state.books.length > 0 &&
            this.state.books.map((book: BookSiteInterface, index: number) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.ISBN}</td>
              </tr>
            ))}
        </Table>
      </section>
    );
  }
}

export default BookSite;
