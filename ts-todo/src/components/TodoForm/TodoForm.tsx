import React, { Component } from "react";

class TodoForm extends Component<
  {},
  {
    name: string;
    start: string;
    end: string;
    budget: number;
    completed: boolean;
    active: boolean;
  }
> {
  state = {
    name: "",
    start: "",
    end: "",
    budget: 0,
    completed: false,
    active: true
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
    const { name, start, end, budget, completed, active } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Task Name..."
        />
        <button onClick={this.handleSubmit} type="button">
          Create Task List Item
        </button>
      </form>
    );
  }
}

export default TodoForm;
