// mutation and how to do an immutable update

const user = {
  userName: "aaront",
  firstName: "aaron",
  lastName: "thompson",
  posts: [a, b, c, d]
};

console.log(user);
user.firstName = "someone else";
console.log(user);

// here the user object will be changed
// but if you log this in the console you will see that it also has a reference to the unchanged one
// if you click on the little 'i' you will note that it says 'just changed now'

function setName(user, newName) {
  user.firstName = newName; //will see the same as before
}

// you mgiht see this

function setName(user, newName) {
  user.firstName = newName;
  return user;
}

console.log(user);
const newUser = setName(user, "someone else");
console.log(newUser);

// this might not look like it will change the objects but it actually will. JS passes objects by reference and so they all point to the same object

// So to update the user object immutably we need to make a copy of the user object

function setName(user, newName) {
  const copy = { ...user }; //create a new wrapper and copt the propeties in
  copy.firstName = newName;
  return copy;
}

console.log(user);
const newUser = setName(user, "someone else");
console.log(newUser);

console.log(user === newUser);
