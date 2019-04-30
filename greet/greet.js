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
    // get a reference to the buttonGroup div
    buttonGroup = document.getElementById("buttonGroup");
    // create a button element
    btn = document.createElement("button");
    // add the text to the button
    btn.appendChild(document.createTextNode("Button " + i));
    // add an event listener when a user clicks on the button
    btn.addEventListener("click", function () { return console.log("clicked on button ", i); });
    // append the button inside the buttonGroup DOM element
    buttonGroup.appendChild(btn);
};
var buttonGroup, btn;
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
var lunch = {
    sandwich: "Ham",
    snack: "Potato Chip's",
    drink: "Sprite",
    guests: 0,
    alcohol: false
};
var food = document.getElementById("foodArea");
if (food) {
    for (var key in lunch) {
        // as a best practice, you should check if the object contains the key before trying to add it to the DOM.
        if (lunch.hasOwnProperty(key)) {
            // create an element of the type that we want to set.
            if (key === "guests")
                break;
            var p = document.createElement("p");
            // set the innerHTML to the string
            p.innerHTML = lunch[key];
            // append the Node to the foodArea div
            food.appendChild(p);
        }
    }
}
// remove the text-muted class from the paragraph text
function removeTextMuted() {
    var paragraphText = document.querySelector(".text-muted");
    if (paragraphText) {
        paragraphText.classList.remove("text-muted");
    }
}
function toggleTextMuted() {
    var paragraphText = document.querySelector(".toggleText");
    if (paragraphText) {
        paragraphText.classList.toggle("text-muted");
    }
}
// You can use className to get all of the classes on an element as a string, add a class or classes, or completely replace or remove all classes.
function centerText() {
    var paragraph = document.querySelector(".text-muted");
    if (paragraph) {
        paragraph.className += " text-center";
    }
}
centerText();
