// Filter is a great  choice if you want a new array that has fewer items than the one you started with

const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Cumin" },
  { id: 3, name: "Corrainder" },
  { id: 4, name: "Fennel" },
  { id: 5, name: "Parika" }
];

const newSpice = spices.filter(spice => {
  return spice.id === 4;
});

// the result of using .filter is a new array with potentially fewer items
// if truthy the value is returned, if falsy then it is not
