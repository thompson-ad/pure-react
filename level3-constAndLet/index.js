// let and const are scoped to the enclosing block rather than the enclosing function
function scopeTest() {
  console.log(outerVar, outerLet);
  var outerVar = "outer var";
  let outerLet = "outer let";
  console.log(outerVar, outerLet);
  if (true) {
    console.log(innerLet, innerVar);
    var innerVar = "inner var";
    let innerLet = "inner let";
    console.log(innerLet, innerVar);
  }
  console.log(innerLet, innerVar);
  //   here only innerLet is undefined because Let and const are scoped to the block
}

scopeTest();

// a common gotcha with var is using it inside a for loop
// if you wrap the console.log in a setTimeout then by the time the console.log runs then i is alreadyv 5
// but is you replace with let then it works as it's capture in the block scope
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
printNumbers();

// const meaning constant is only partially true

const name = "aaron"; //cannot be reassigned

// but

const person = {
  name: "aaron"
};

// we cannot say person = {a: 5}; but we can reassign person.name (change the internal properties)

// same with names

const nums = [1, 2, 3, 4];

nums.push(3); //is allowed
