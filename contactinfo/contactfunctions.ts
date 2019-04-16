import { HasPhoneNumber, HasEmail } from "./contactinfo";
// Defining functions require that arguments have a type and the return types are assigned.
function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: `You're Prequalified`
  };
}

let to = { name: "Ed", email: "nonono@gmail.com" };

console.log(sendEmail(to));

// Example of an ES6 funciton that has argument type and return type specified.
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.phone}>`,
    body: "We received your message!"
  };
};

let phone = { name: "Edwin", phone: 1234567890 };

console.log(sendTextMessage(phone));

// An Example of a function that has an inferred return type. No return type is specified so TypeScript will inferr the return type such that it contains firstName, middleName and lastName
function getNameParts(contact: string[]) {
  const parts = contact;
  return {
    firstName: parts[0],
    middleName: parts[1],
    lastName: parts[2]
  };
}

let contactname = ["edwin", "s", "rivera"];

console.log(getNameParts(contactname));

// function signature overloading -
function contactPeople(method: "email", ...people: HasEmail[]);
function contactPeople(method: "phone", ...people: HasPhoneNumber[]);
// The contactPeople implementation should return a list of people with either email address or phone numbers. The method passed will determine whether the interface that the function will use is either the HasEmail or HasPhoneNumber interface. If you do not use the function signature overload the intersection between the type of object we want returned when sending an email or a phone number will not work. To see the problem in action comment out the signature overload functions and look at the function declaration contactPeople with method email with an object that includes a phone property.

function contactPeople(
  method: "email" | "phone",
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}
// sending email with email type will work
contactPeople("email", { name: "ed", email: " e@gmail.com" });
// sending phone with phone type will work
contactPeople("phone", { name: "ed", phone: 123412455 });
// sending email with a phone type will cause an error.
contactPeople("email", { name: "ed", phone: 123513251 });
