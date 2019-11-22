// using find and findIndex

const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Corainder" },
  { id: 5, name: "Chilli Powder" }
];

const ourSpice = spices.find(spice => {
  return spice.name === "Corainder"; //the condition for which you want to return true
});

console.log(ourSpice);

// .find only finds the first match

// using.findIndex finds the index

// for find if returns false then you get undefined for findIndex you get -11
