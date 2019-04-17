// An example of a type that uses an interface
// The NumVal type can be a 1, 2, 3 or an array of 1's,2's and 3's.
type NumVal = 1 | 2 | 3 | NumArr;
// Create an interface type that extends the NumVal type of type Array - This is an array of objects of the NumVal type.
interface NumArr extends Array<NumVal> {}
// Tests
let testPrimitiveOne: NumVal = 1;
let testPrimitiveTwo: NumVal = 2;
let testPrimitiveThree: NumVal = 3;
let testPrimitiveArray: NumVal = [1, 2, 3, [1, 2, 2], [1, 2, 3]];
// The test below will not work because the array contains the value 4.
let testPrimitiveArrayTwoFail: NumVal = [1, 2, 3, 4];

// Take away: types can give a name to any primitive number, string, boolean, undefined and null. interfaces provide a way to define objects.
