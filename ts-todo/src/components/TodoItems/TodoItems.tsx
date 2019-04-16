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
    <section>
      {todoItems.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>
            {item.start} - {item.end}
          </p>
          <p>{item.timeSpent}</p>
          <button onClick={() => handleDelete(item.id)}>Delete Item</button>
          <button onClick={() => handleCompleted(item.id)}>
            Mark Complete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoItems;
