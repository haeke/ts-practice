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
