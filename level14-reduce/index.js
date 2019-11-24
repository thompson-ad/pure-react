// the reduce function on arrays is the most general purpose of all of them
// it can do the same as filter and map and more

const veggieDrawer = [
  "3 apples",
  "2 bad tomatoes",
  "fresh celery",
  "4 good onions",
  "1 bad onion",
  "rotten cilantro",
  "2 rotten red peppers",
  "garlic"
];

// takes two args 1. previous value, 2. the item in the array
// whatever you return from the reducer function becomes the value of arg 1. for the next time around
function reducer(bucket, item, index, array) {
  if (item.includes("bad") || item.includes("rotten")) {
    return bucket;
  }
  count = parseInt(item);
  bucket.veggies.push(item);
  bucket.howMany += isNaN(count) ? 1 : count;

  if (index === array.length - 1) {
    return `you have ${bucket.howMany} veggies: ${bucket.veggies.join(", ")}`;
  }
  return bucket;
}

// this gets passed into the reducer as the first item
const initialValue = {
  veggies: [],
  howMany: 0
};

// reduce takes in two arguments
// the initial value is going to be in the same form as your result
const goodVeggies = veggieDrawer.reduce(reducer, initialValue);
