// An interface is a syntactical contract which defines the syntax of any entity. Interfaces in Typescript define properties, methods, and events which are the members of the interface. It contains only the declaration of the members. It is responsible for deriving classes to define the members. It often helps in providing a standard structure that the deriving classes would follow. For declaring an interface, we make use of the “interface” keyword.

interface ContactInfo {
  name: string;
  phone: number;
  email: string;
}

// Any instance of a variable with type ContactInfo can only have the properties and types defined in the ContactInfo interface.
let me: ContactInfo = {
  name: "Edwin",
  phone: 12352355,
  email: "email@gmail.com"
};
