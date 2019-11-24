// modifying an array with Map

const people = [
  {
    name: "aaron",
    last: "thompson",
    handle: "@thompson_ad"
  },
  {
    name: "kirsten",
    last: "Mac",
    handle: "@kvmac"
  },
  {
    name: "Nathan",
    last: "Williams",
    handle: "@nathanlw4"
  }
];

// map takes a function as an argument and that function receives each item of the array in turn

const newPeopleArray = people.map(person => {
  return person.last;
}); // the result of this would be a brand new array made up of all the last names

// the orignal array would have not been changed

// NOTE - map is a good function to use if you want to have a new array that has the same number of items as the old one
// theres no way to exit or skip -= for this use filter innstead

// map can also actually change the original array
// the items that get passed into the Person argument actually refer to the original array so if you run

const newPeopleArray = people.map(person => {
  person.name += "!!!";
  return person;
});

// this would actually edit the orignal person array

//  a better way to do it would be

const newPeopleArray = people.map((person, index) => {
  return { ...person, first: person.first + "!!!" };
});
