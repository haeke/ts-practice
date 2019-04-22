// Partial types allow you to make all properties on an object optional

import { HasEmail } from "../contactinfo/contactinfo";

type MayHaveEmail = Partial<HasEmail>;
const contactme: MayHaveEmail = {};

// Pick allows you to select one of more properties on an object
// PickOne's type can only contain one or two on its object. three will error.
type PickOne = Pick<{ one: "one"; two: "two"; three: "three" }, "one" | "two">;

let guess: PickOne;
guess.one;
guess.two;
// three cannot be a property on the PickOne type because only one and two are options.
guess.three;

type Choices = Pick<{ boat: "boat"; car: "car" }, "boat" | "car">;
let chooseCar: Choices;
chooseCar.car;

// TypeScript and closures
// Closures allows for inner functions to have access to an outer functions variable scope. This can be used to provide data privacy.

function employee() {
  let department: string = "IT";
  return {
    getDept(): string {
      return department;
    },
    setDept(newDepartment: string): string {
      return (department = newDepartment);
    }
  };
}

let edwin = employee();
console.log("start employee");
console.log(edwin.getDept());
