// An Example TypeScript file that will add a greeting to the document body of an html document.
// Interface definition of the Shape of a Person Object.

interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  // full names string type annotation.
  fullName: string;
  //
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

// The type annotation of the name parameter is the Person interface.
function greeter(name: Person) {
  return `Hello, ${name.firstName} - ${name.lastName}!`;
}

function sendGreeting(): void {
  console.log("sending a hello to the console.");
}

// user is an object with the firstName, and lastName keys.
let user = new Student("Edwin", "S.", "Rivera");

let greetingButton = document.getElementById("greetButton");
greetingButton.addEventListener("click", sendGreeting);

let greeting = document.getElementById("welcomeGreeting");

greeting.innerHTML = greeter(user);

for (let i = 0; i < 5; i++) {
  // get a reference to the buttonGroup div
  var buttonGroup = document.getElementById("buttonGroup");
  // create a button element
  var btn = document.createElement("button");
  // add the text to the button
  btn.appendChild(document.createTextNode("Button " + i));
  // add an event listener when a user clicks on the button
  btn.addEventListener("click", () => console.log("clicked on button ", i));
  // append the button inside the buttonGroup DOM element
  buttonGroup.appendChild(btn);
}

interface Lunch {
  sandwich: string;
  snack: string;
  drink: string;
  guests: number;
  alcohol: boolean;
}

let lunch: Lunch = {
  sandwich: "Ham",
  snack: "Potato Chip's",
  drink: "Sprite",
  guests: 0,
  alcohol: false
};

let food = document.getElementById("foodArea");
if (food) {
  for (let key in lunch) {
    // as a best practice, you should check if the object contains the key before trying to add it to the DOM.
    if (lunch.hasOwnProperty(key)) {
      // create an element of the type that we want to set.
      if (key === "guests") break;
      let p = document.createElement("p");
      // set the innerHTML to the string
      p.innerHTML = lunch[key];
      // append the Node to the foodArea div
      food.appendChild(p);
    }
  }
}

// remove the text-muted class from the paragraph text
function removeTextMuted(): void {
  let paragraphText: Element = document.querySelector(".text-muted");
  if (paragraphText) {
    paragraphText.classList.remove("text-muted");
  }
}

function toggleTextMuted(): void {
  let paragraphText: Element = document.querySelector(".toggleText");

  if (paragraphText) {
    paragraphText.classList.toggle("text-muted");
  }
}

// You can use className to get all of the classes on an element as a string, add a class or classes, or completely replace or remove all classes.
function centerText(): void {
  let paragraph = document.querySelector(".text-muted");
  if (paragraph) {
    paragraph.className += " text-center";
  }
}

centerText();
