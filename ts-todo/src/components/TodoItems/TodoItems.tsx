import React from "react";

interface TodoItems {
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
  todoItems: Array<TodoItems>;
}> = ({ todoItems }) => {
  return (
    <section>
      {todoItems.map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>
            {item.start} - {item.end}
          </p>
          <p>{item.timeSpent}</p>
        </div>
      ))}
    </section>
  );
};

export default TodoItems;
