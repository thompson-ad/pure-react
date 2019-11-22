// destructuring

const nums = [1, 2, 3, 4, 5];

const [a, b] = nums;

// a and b are destructured from nums
// this reads - "i expect nums to be an array so assign a  and b to the first and second value in that array"

// a = 1, b =2 and the rest of the array elements will  be ignored

// you can also combine the rest operator with destructuring to put the remaining items oin an array

const [a, b, ...others] = nums;

console.log(a, b, others);

// we can destructure objects as well

const user = {
  username: "aaront",
  firstName: "aaron",
  lastName: "thompson"
};

const { userName, firstName } = user;

// we expect user to be an object and put the value of username in the first variable and the value of firstname and put it in the second variable

// so the variable names need to match the key names in the object but you can rename them by putting a colon

const { userName: rename, firstName } = user;

// you can specify default values for the keys

const { fullName = "Missing" } = user;
// is user does not have the key  fullName then it will be assigned 'Missing' if it does then it will be assigned that name

// can also use the rest operator

const { username, ...name } = user;

console.log(name);
//  name will have every property apart from username

const userTwo = {
  username: "aaront",
  firstName: "aaron",
  lastName: "thompson",
  posts: [
    { id: 1, title: "best title" },
    { id: 2, title: "worst title" }
  ]
};

const {
  posts: [{ title }, { title: title2 }]
} = userTwo;

// this reads - expect user`two to be an object that contains posts which has an array with two objects. pull out title and title 2 from those objects
// can't have two variables with the same name

// NESTED DESTRUCTURNG IS HARD  TO READ! DON'T USE IT

// destructuring is used a lot inf REACT

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
}

// initiaCount is destructured from the props that the child receives and count and setcount is destructured form the useState hook
