// The Shape of an individual TaskItem object
interface TaskItem {
  id: number;
  name: string;
  start: string;
  end: string;
  completed: boolean;
}
// The TaskItems interface consists of an array of TaskItem interfaces.
interface TaskItems extends Array<TaskItem> {}

// Define an array taskList of type TaskItems
let taskList: TaskItems = [
  {
    id: 0,
    name: "Learn the basics of typescript",
    start: "01/02/2019",
    end: "01/02/2019",
    completed: false
  },
  {
    id: 1,
    name: "Learn the basics of typescript interfaces",
    start: "01/03/2019",
    end: "01/03/2019",
    completed: false
  },
  {
    id: 2,
    name: "Learn the basics of typescript functions",
    start: "01/04/2019",
    end: "01/04/2019",
    completed: false
  },
  {
    id: 3,
    name: "Learn the basics of typescript function signature overloading",
    start: "01/05/2019",
    end: "01/54/2019",
    completed: false
  }
];

function getById(id: number, tasks: TaskItems): TaskItem {
  // Use the find method to return the task item that contains the particular id passed as an argument.
  let item = tasks.find((task: TaskItem) => task.id === id);
  console.log(item);
  return item;
}

console.log(getById(2, taskList));
