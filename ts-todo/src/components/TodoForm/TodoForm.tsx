import React, { Component } from "react";

// This defines what the state object that the TodoForm will implement.
// I passed null to the TodoForm because there are no props that the TodoForm will use for now.
interface State {
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
  listItems: object;
}

class TodoForm extends Component<null, State> {
  state = {
    name: "",
    start: "",
    end: "",
    timeSpent: 0,
    completed: false,
    active: true,
    listItems: {}
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    } as any);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("called submit", this.state.name);
  };
  render() {
    const { name, start, end, timeSpent } = this.state;
    return (
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
    );
  }
}

export default TodoForm;
