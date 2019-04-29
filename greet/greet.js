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
var greetingButton = document.getElementById("greetButton");
greetingButton.addEventListener("click", sendGreeting);
var greeting = document.getElementById("welcomeGreeting");
greeting.innerHTML = greeter(user);
var _loop_1 = function (i) {
    buttonGroup = document.getElementById("buttonGroup");
    // create a button element
    btn = document.createElement("button");
    // add the text to the button
    btn.appendChild(document.createTextNode("Button " + i));
    // attach an event listener to do this: document.addEventListener
    btn.addEventListener("click", function () { return console.log("clicked on button ", i); });
    buttonGroup.appendChild(btn);
};
var buttonGroup, btn;
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
