// Generics let you define interfaces and functions that accept a type that is "dynamic"; Think of Generic Type or passing a Dynamic Type;

interface HasPhone<T> {
  phone: T;
}
// Define a PhoneNumber using the HasPhone interface passing a string.
let phoneNumberAsString: HasPhone<string> = {
  phone: "973-555-5604"
};
// Define a PhoneNumber using the HasPhone interface passing a number.
let phoneNumberAsNumber: HasPhone<number> = {
  phone: 9735555604
};
