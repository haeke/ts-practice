import React from "react";
import PropTypes from "prop-types";

import "./TodoItems.css";

// The TodoItems creates the UI for each individual todo list item. The handleDelete function will be used if a user want's to remove an item.

const TodoItems = ({ todoItems, handleDelete }) => {
  return (
    <section className="todoItemContainer">
      {todoItems.map(item => (
        <div className="todoCard" key={item.id}>
          <h1 className="todoHeader">{item.name}</h1>
          <p className="todoDate">Start Date: {item.start} </p>
          <p className="todoDate"> End Date: {item.end}</p>
          <p className="todoTime">Time Spent: {item.timeSpent}</p>
          <button className="todoButton" onClick={() => handleDelete(item.id)}>
            Delete Item
          </button>
        </div>
      ))}
    </section>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      end: PropTypes.string,
      timeSpent: PropTypes.string
    })
  ),
  handleDelete: PropTypes.func
};

export default TodoItems;
