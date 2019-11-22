const word = ["c", "o", "d", "e"];

console.log(word.slice(1, 4)); // doesn't change the original
console.log(word);

// if you need to remove something from the middle of the array splice is better but changes the word

console.log(word.splice(1, 2, "a")); //started at index 1. removed two letter and replaced with a
