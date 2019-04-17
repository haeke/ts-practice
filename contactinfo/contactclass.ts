import { HasPhoneNumber, HasEmail } from "./contactinfo";

class ContactPhone implements HasPhoneNumber {
  // the name and phone needs to be declared so that the class knows that these member fields exist.
  name: string;
  phone: number;
  // same rule when defining arguments, the types are required. constructor functions do not contain return types.
  constructor(name: string, phone: number) {
    this.name = name;
    this.phone = phone;
  }
}
let me = new ContactPhone("edwin", 5552255);

// ParamProperties allow for a less verbose syntax when defining a class by defining an ACCESS MODIFIER KEYWORD: public, private, or protected to the arguments inside the constructor function.
class ParamPropContactPhone implements HasPhoneNumber {
  constructor(public name: string, public phone: number) {}
}

let paramme = new ParamPropContactPhone("edwin", 12345);

class ContactEmail implements HasEmail {
  // the name and email fields need to be declared so that the class knows the fields exist.
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

let you = new ContactEmail("ed", "myemail@gmail.com");

// The takeaway here is that "implements" defines a class that aligns with an interface.

// An example of a class that uses implements on multiple interfaces and has an protected value that is initialized to 0.

class OtherContact implements HasPhoneNumber, HasEmail {
  protected age: number = 0;
  constructor(
    public name: string,
    public email: string = "no email",
    public phone: number
  ) {}
  // Create a public function that will return the age of the OtherContact
  public getAge(): number {
    return this.age;
  }
}

let otherContact = new OtherContact("Edwin", "example@gmail.com", 12345);
let newContact = new OtherContact("edwin", undefined, 12345);
console.log(newContact.email);
console.log(otherContact.getAge());

// TypeScript Allows for Abstract classes - this type of class cannot be instantiated on its own. In addition Abstract functions, where the function will need to be called when using this class.
abstract class AbstractContact implements HasPhoneNumber, HasEmail {
  // must be implemented by a non-abstract class.
  public abstract email: string;
  constructor(public name: string, public phone: number) {}
  // The sendEmail function needs to be implemented by a non-abstract class.
  abstract sendEmail(): void;
}

class UseAbstractContact extends AbstractContact {
  constructor(public email: string, name: string, phone: number) {
    // the use of super means that we are using the values of name and phone from the Abstract contact or whatever class we are "extending"
    super(name, phone);
  }
  // The sendEmail function needs to be defined.
  sendEmail() {
    console.log("sending email...");
  }
}

let implementabstract = new UseAbstractContact(
  "email@gmail.com",
  "edwin",
  123545
);

console.log(implementabstract);
