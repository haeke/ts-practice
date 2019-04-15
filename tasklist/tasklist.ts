interface TaskItem {
  name: string;
  start: string;
  end: string;
  completed: boolean;
}

let programwithts = {
  name: "Learn the basics of typescript",
  start: Date.now(),
  end: Date.now(),
  completed: false
};

console.log(programwithts);
