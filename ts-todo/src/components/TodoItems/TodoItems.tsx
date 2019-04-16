import React from "react";

interface TodoItem {
  id: number;
  name: string;
  start: string;
  end: string;
  timeSpent: number;
  completed: boolean;
  active: boolean;
  todoItems: Array<object>;
}

const TodoItems: React.SFC<{
  todoItems: Array<TodoItem>;
  handleDelete: (id: number) => void;
  handleCompleted: (id: number) => void;
}> = ({ todoItems, handleDelete, handleCompleted }) => {
  return (
    <section className="todoItemContainer">
      {todoItems.map(item => (
        <div className="todoCard" key={item.id}>
          <h1
            className="todoHeader"
            style={
              item.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {item.name}
          </h1>
          <p className="todoDate">Start Date: {item.start} </p>
          <p className="todoDate"> End Date: {item.end}</p>
          <p className="todoTime">Time Spent: {item.timeSpent} hours</p>
          <button className="todoButton" onClick={() => handleDelete(item.id)}>
            Delete Item
          </button>
          <button
            className="todoButton"
            onClick={() => handleCompleted(item.id)}
          >
            Mark Complete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoItems;
