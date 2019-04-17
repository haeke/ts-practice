// An example of a type that uses an interface
// The NumVal type can be a 1, 2, 3 or an array of 1's,2's and 3's.
type NumVal = 1 | 2 | 3 | NumArr;
// Create an interface type that extends the NumVal type of type Array
interface NumArr extends Array<NumVal> {}
// Tests
let testPrimitiveOne: NumVal = 1;
let testPrimitiveTwo: NumVal = 2;
let testPrimitiveThree: NumVal = 3;
let testPrimitiveArray: NumVal = [1, 2, 3, [1, 2, 2], [1, 2, 3]];
let testPrimitiveArrayTwoFail: NumVal = [1, 2, 3, 4];
