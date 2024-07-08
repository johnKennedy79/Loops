console.log("Hello world!");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
// for starts at 0 and runs 5 times

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
//while starts at 1 as this is the value of counter and runs adding 1 each time until equal to 5

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

const myFavouriteFoods = ["Chilli", "Pizza", "Boreg", "Baklava"];
for (let i = 0; i < myFavouriteFoods.length; i++) {
  console.log(myFavouriteFoods[i]);
}

const myFavouriteNumbers = [7, 17, 22, 76];

for (let food of myFavouriteFoods) {
  console.log(food);
}

for (let loto of myFavouriteNumbers) {
  console.log(loto);
}

myFavouriteFoods.forEach(function (food) {
  console.log("I love " + food);
});

myFavouriteFoods.forEach(function (food, index) {
  console.log(index, "I love " + food);
});

//Workshop
const myFavouriteAnimals = [
  "Aardvarks",
  "Otters",
  "Manatees",
  "Bears",
  "Raccoons",
];

for (let ani of myFavouriteAnimals) {
  console.log(ani);
}
const myFavouriteColours = ["Red", "lime Green", "Black"];

for (let i = 0; i < myFavouriteColours.length; i++) {
  console.log(myFavouriteColours[i]);
}
