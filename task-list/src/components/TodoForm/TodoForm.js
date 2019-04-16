import React, { Component } from "react";

import TodoItems from "../TodoItems/TodoItems";

import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    id: 0,
    name: "",
    start: "",
    end: "",
    timeSpent: 0,
    completed: false,
    active: true,
    error: false,
    todoItems: []
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // The handleDelete function requires the id of the todoItem to be deleted. It uses the filter method to return all of the todoItems that do not contain the particular id.
  handleDelete = id => {
    const { todoItems } = this.state;

    let newItems = todoItems.filter(item => item.id !== id);

    this.setState({
      todoItems: newItems
    });
  };

  // The handleSubmit component will add a new object to the todoItems array when a user submits the form.
  handleSubmit = event => {
    // Use preventDefault so that the browser does not reload after the form is submitted.
    event.preventDefault();
    // Destructure the current items inside of state
    const {
      id,
      name,
      start,
      end,
      timeSpent,
      active,
      completed,
      todoItems
    } = this.state;
    if (!name || !start || !end || !timeSpent) {
      this.setState({
        error: true
      });
    } else {
      // create an object consisting of the form values, increment the id by one for each newItem created.
      let newItem = {
        id,
        name,
        start,
        end,
        timeSpent,
        completed,
        active
      };
      // create a new array consisting of the current items inside of the todoItems array and the newItem object.
      let newItems = [...todoItems, newItem];

      // update state with the new array consisting of the items that exist in state and the new item consisting of the form values.
      this.setState(() => ({
        todoItems: newItems,
        id: id + 1,
        name: "",
        start: "",
        end: "",
        timeSpent: 0,
        completed: false,
        active: true,
        error: false
      }));
    }
  };
  render() {
    const { name, start, end, timeSpent, todoItems, error } = this.state;
    return (
      <React.Fragment>
        <form className="todoForm" onSubmit={this.handleSubmit}>
          <label className="todoLabel" htmlFor="Task Name">
            Task Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Task Name..."
          />
          <label className="todoLabel" htmlFor="Start Date">
            Date Started
          </label>
          <input
            type="date"
            name="start"
            value={start}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Start Date..."
          />
          <label className="todoLabel" htmlFor="Date Ended">
            Date Ending Approx.
          </label>
          <input
            type="date"
            name="end"
            value={end}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="End Date..."
          />
          <label className="todoLabel" htmlFor="Time Spent">
            Time Spent in Hours
          </label>
          <input
            type="number"
            name="timeSpent"
            value={timeSpent}
            className="todoInput"
            onChange={this.handleChange}
            placeholder="Time Spent in hours..."
          />
          <button
            className="todoButton"
            onClick={this.handleSubmit}
            type="button"
          >
            Create Task List Item
          </button>
        </form>
        {error && (
          <h1 className="todoError">* Please Check for missing fields.</h1>
        )}
        {todoItems.length > 0 && (
          <TodoItems todoItems={todoItems} handleDelete={this.handleDelete} />
        )}
      </React.Fragment>
    );
  }
}

export default TodoForm;
