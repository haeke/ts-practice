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

// Create a union that will let you define an object that includes all of the properties of the HasEmail and HasPhoneNumber Interfaces. Note - this object must contain all the properties of the object.
let combineContactInfo: HasEmail & HasPhoneNumber = {
  name: "Ed",
  email: "ed@gmailsnailmail.com",
  phone: 1234567890
};

// Adding a ? mark to an Object Type makes the property optional.
interface LuxuryCar {
  manufacturer: string;
  leatherInterior?: boolean;
  selfDriving?: boolean;
  allWheelDrive?: boolean;
}
// Create an object that does not contain the selfDriving property.
let ATS: LuxuryCar = {
  manufacturer: "Cadillac",
  leatherInterior: true,
  allWheelDrive: false
};

let E350: LuxuryCar = {
  manufacturer: "Mercedes-Benz",
  leatherInterior: true,
  selfDriving: false,
  allWheelDrive: false
};
