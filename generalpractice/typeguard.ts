// type guards in typescript alow you to narrow down the type object within a conditional block.

// Below we call a function that will check to see if argument x is of the type interface HasEmail

import { HasEmail } from "../contactinfo/contactinfo";

function isHasEmail(x: any): x is HasEmail {
  return typeof x.name === "string" && typeof x.email === "string";
}

let testEmail = isHasEmail({ name: "ed", email: "test" });
console.log(testEmail);
