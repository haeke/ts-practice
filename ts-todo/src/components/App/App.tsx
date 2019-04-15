import React, { Component } from "react";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoForm from "../TodoForm/TodoForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App">
        <TodoHeader headerText="Task List Todo App" />
        <TodoForm />
      </main>
    );
  }
}

export default App;
