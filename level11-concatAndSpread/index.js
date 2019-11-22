const numbers = [1, 2, 3, 4];
const moreNumbers = [5, 6, 7, 8];

console.log(numbers.concat(moreNumbers)); // adds more numbers to the end without editing it
console.log([0, ...numbers, ...moreNumbers]); // the spread operator will have the same affext as conact
