// Define two Interface objects that have the same name property but different fields for phone number and email address.

interface HasPhoneNumber {
  name: string;
  phone: number;
}

interface HasEmail {
  name: string;
  email: string;
}

// Define a new object that will use the or to create an Intersection. This object will only be allowed to use properties shared between the HasPhoneNumber and HasEmail Interfaces

let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? { name: "Ed", email: "Ed@gmailsnailmail.com" }
    : { name: "Ed", phone: 1234567890 };
// contactInfo can only access the .name property.
contactInfo.name;
