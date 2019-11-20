// a plain old function

function makeFullName(first, last) {
    return first + ' ' last;
}

console.log(makeFullName('Aaron', 'Thompson'));

// we can turn this function into an arrow function my making it a variable
// and putting an arrow on the right side of the parameters

const makeFullName = (first, last) => {
    return first + ' ' last;
}

console.log(makeFullName('Aaron', 'Thompson'));

// if instead you had an anonymous function

const printFullName = function(first, last) {
    return first + ' ' last;
}

// just delete the function key word and put the arrow in

const printFullName = (first, last) => {
    return first + ' ' last;
}

// arrow functons are ALWAYS anonymous functions, you can't have a name one that doesn't get stored in a variable

// instead of an implicit return you can even put it all on one line
// this implies a return so just make sure whatever is on that line is what you want to return

const makeFullName = (first, last) => first + ' ' last;

// if you have a named object like this that returns an object

const createUser = (name, email) => {
    return {
        name: name,
        email: email,
        createdAt: Date.now()
    };
}

// if we want to make this an implicit return this:

const createUser = (name, email) => {
        name: name,
        email: email,
        createdAt: Date.now()
};

// is sort of ambiguous
// JS can't tell if the curly brace is the start of an object or a function so you need to wrap in parenthesis

const createUser = (name, email) => ({
    name: name,
    email: email,
    createdAt: Date.now()
});

// and in short hand

const createUser = (name, email) => ({
    name,
    email,
    createdAt: Date.now()
});


