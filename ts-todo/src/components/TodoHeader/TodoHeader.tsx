import React from "react";

import "./TodoHeader.css";

const TodoHeader: React.SFC<{ headerText: string }> = ({ headerText }) => (
  <header className="App">
    <h1 className="todoHeader">{headerText}</h1>
  </header>
);

export default TodoHeader;
