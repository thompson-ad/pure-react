// regular JS functions have a lot of rules ro determine the value of this

function printThis() {
  console.log(this);
}

// this will be the window - or, if we put "use strict" at the top of the file this will be undefined

printThis();

// we can change the value of this by using the .bind() method
// we can pass anything to .bind() and it will create a new function that we can, say, store in a variable

const fn = printThis.bind(42);

fn(); // this will be 42

// call or apply do a similar thing

// whereas in an arrow function the this value is determined lexically

const prinThis = () => {
  console.log(this);
};

// there is no way to altyer the value of this with an arrow function. even when you use bind call and apply

// in some cases this is great as you can pass a function around and it will mantain it;s this value but if you rquire otherwise you need a regular function
