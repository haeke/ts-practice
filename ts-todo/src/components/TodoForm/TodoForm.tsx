import React, { Component } from "react";

import TodoItems from "../TodoItems/TodoItems";

interface TodoItem {
  id: number;
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
}

// This defines what the state object that the TodoForm will implement.
// I passed an empty object to the TodoForm because there are no props that the TodoForm will use for now.
interface State {
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
  todoItems: Array<TodoItem>;
}

class TodoForm extends Component<{}, State> {
  state = {
    id: 0,
    name: "",
    start: "",
    end: "",
    timeSpent: 0,
    completed: false,
    active: true,
    todoItems: []
  };
  // The handleChange method is a reusable function that will be used to create the list of controlled inputs to change the values of the name, start, end and timeSpent.
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    } as any);
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
      active: true
    }));
  };
  render() {
    const { name, start, end, timeSpent, todoItems } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Task Name..."
          />
          <input
            type="date"
            name="start"
            value={start}
            onChange={this.handleChange}
            placeholder="Start Date..."
          />
          <input
            type="date"
            name="end"
            value={end}
            onChange={this.handleChange}
            placeholder="End Date..."
          />
          <input
            type="number"
            name="timeSpent"
            value={timeSpent}
            onChange={this.handleChange}
            placeholder="Time Spent in hours..."
          />
          <button onClick={this.handleSubmit} type="button">
            Create Task List Item
          </button>
        </form>
        {todoItems.length > 0 && <TodoItems todoItems={todoItems} />}
      </>
    );
  }
}

export default TodoForm;
