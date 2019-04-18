// Generics let you define interfaces and functions that accept a type that is "dynamic"; Think of Generic Type or passing a Dynamic Type; A convention when defining a generic is to use a single capital letter.

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

// Generics can have a default type.
interface CheckForString<T = any> {
  (val: T): boolean;
}
// This function will check the type of the text argument is indeed a string.
let stringCheck: CheckForString<string> = text => typeof text === "string";

stringCheck("text");
// type error because we passed a number
stringCheck(2);

// define a closure with generic types, generic types scope works just like variable scope.
function outerTuple<T>(a: T) {
  return function innerTuple<H>(b: H) {
    return [a, b] as [T, H];
  };
}

let newItemPair = outerTuple(["Cool", "text"])(3);

console.log(newItemPair);
