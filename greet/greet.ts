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

let greetingButton = document.querySelector(".greetButton");
greetingButton.addEventListener("click", sendGreeting);

let greeting = document.querySelector(".welcomeGreeting");

greeting.innerHTML = greeter(user);
