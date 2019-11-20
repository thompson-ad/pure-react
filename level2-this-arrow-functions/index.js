// regular JS functions have a lot of rules ro determine the value of this

function printThis() {
  console.log(this);
}

// this will be the window - or, if we put "use strict" at the top of the file this will be undefined

printThis();

// we can change the value of this by using the .bind() method
// we can pass anything to .bind() and it will create a new function that we can, say, store in a variable

const fn = printThis.bind(42)

fn() // this will be 42

// call or apply do a similar thing

// 


