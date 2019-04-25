interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
}

var person = {
  // The function cannot be an arrow function because it contains its own this binding. In this case we want to pass the this context of an object using the call function.
  fullName: function(): string {
    return `${this.firstName} ${this.middleName}, ${this.lastName}`;
  }
};

var george = {
  firstName: "George",
  middleName: "S.",
  lastName: "Doe"
};

var carla = {
  firstName: "Carla",
  middleName: "S.",
  lastName: "Doe"
};
// Bind the fullName functions this context to the george object.
console.log(person.fullName.call(george));
console.log(person.fullName.call(carla));
