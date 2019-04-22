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

// Example of a dictionary that uses a Generic

type Dict<T> = {
  [key: string]: T;
};
// the mapDict function needs to indicate that it uses a generic of type T. The function should return an object of type Dict of transformed values.
function mapDict<T, S>(
  items: Dict<T>,
  callback: (arg: T, idx: number) => S
): Dict<S> {
  let out: Dict<S> = {};
  Object.keys(out).forEach((dictionaryKey, idx) => {
    let listItem = items[dictionaryKey];
    // make sure the typeof listItem is not undefined
    if (typeof listItem !== "undefined") {
      out[dictionaryKey] = callback(listItem, idx);
    }
  });
  return out;
}

console.log(mapDict({ a: "a", b: "b" }, str => ({ key: str })));

// Create a type guard  that uses a generic to narrow down the tpye object within a conditional block.

function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== "undefined";
}

let list = ["a", "b", "c", undefined, "d"];
// Wil return a list of the objects that do not contain undefined.
console.log(list.filter(isDefined));
