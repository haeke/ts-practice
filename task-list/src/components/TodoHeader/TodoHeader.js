import React from "react";
import PropTypes from "prop-types";

import "./TodoHeader.css";

const TodoHeader = ({ headerText }) => {
  return (
    <header className="headerContainer">
      <h1 className="headerText">{headerText}</h1>
    </header>
  );
};

TodoHeader.propTypes = {
  headerText: PropTypes.string
};

export default TodoHeader;
