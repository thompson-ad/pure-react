// unless we explicity export this function it is not available to outside modules
// can only have one default
export default function sayHi() {
  console.log("HI");
}

export function printName(user) {
  console.log("HI");
}

// note you can also export and import variables etc
// note that they must always be at the top level though
