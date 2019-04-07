/*
  Write a function that:
  1. If two numeric arguments are supplied, returns their sum.
  2. If either of the two args is not numeric, return a JavaScript 
    error "Must supply only numeric arguments" .
  3. If more than two arguments are supplied, add them to the result.
  4. If any of the third or subsequent arguments are not a number, 
    also return a JavaScript error "Must supply only numeric arguments"
*/

// function sum(a, b, c) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b + (c || 0);
//   }
//   throw new Error("Must supply only numeric arguments");
// }

// function sum() {
//   let sum = 0;
//   // argument is an "array-like" object
//   if (arguments.length < 2) {
//     throw new Error("Must supply only numeric arguments");
//   }
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] !== "number") {
//       throw new Error("Must supply only numeric arguments");
//     }
//     sum += arguments[i];
//   }
//   return sum;
// }

function sum(...args) {
  // using rest parameters converts input parameters to a true array
  if (args.length < 2) {
    throw new Error("Must supply only numeric arguments");
  }
  return args.reduce((sum, arg) => {
    if (typeof arg !== "number") {
      throw new Error("Must supply only numeric arguments");
    }
    return sum + arg;
  }, 0);
}

module.exports = sum;
