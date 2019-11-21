// Rest and spread operators
// two names for dots that look the same

// you can use the rest operator as a parameter to collect all arguments together in an array
//
function printArgs(...args) {
  console.log(args);
}

printArgs(1, 2, 3);

// this will console.log [1, 2, 3]

// NOTE
//  the rest parameter needs to be the last one
// is you change parameters to (first, second, ...args) the last one in the console.log will be an array
// it's always guaranteed to be an array so if the arguments are empty it will return an empty array

// the spread operator looks the same exept it exposes an array in place
//

const nums = [1, 2, 3, 4];

printArgs(...nums); // will pass nums in as individual arguments to the function
//  same thing as if we had written out (num[0], num[1] etc)

// spread operator works on objects too

const user = {
  username: "aaront",
  firstName: "Aaron",
  lastName: "Thompson"
};

console.log({
  ...user
}); //this explodes all of the properties into a new object

console.log({
  firstName: "Default",
  ...user,
  fullname: `${user.firstName} ${user.lastName}`
}); // full name can be added to the list of properties

// also note that the order matters - ...user will overwrite the firstName property above it and it already exists

// DEBUG

const DEBUG = true;
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug("this", "works", "great");
