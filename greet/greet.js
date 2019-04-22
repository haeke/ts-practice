// An Example TypeScript file that will add a greeting to the document body of an html document.
// Interface definition of the Shape of a Person Object.
var Student = /** @class */ (function () {
    //
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// The type annotation of the name parameter is the Person interface.
function greeter(name) {
    return "Hello, " + name.firstName + " - " + name.lastName + "!";
}
function sendGreeting() {
    console.log("sending a hello to the console.");
}
// user is an object with the firstName, and lastName keys.
var user = new Student("Edwin", "S.", "Rivera");
var greetingButton = document.querySelector(".greetButton");
greetingButton.addEventListener("click", sendGreeting);
var greeting = document.querySelector(".welcomeGreeting");
greeting.innerHTML = greeter(user);
