// # Car factory

// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" propety that always has the value "car".

// The factory should take in three parameters and save them to the created objects:
// - make
// - model
// - year

// Use your function to create 10 different cars. Store all of them inside a "garage" array.

function Factory(type = "car", make, model, year) {
  this.type = type;
  this.make = make;
  this.model = model;
  this.year = year;
}

for (let i = 0; i < 10; i++) {
  const newBuiltCar = new Factory("car", "May 17", "Cabriolet", 2021);
  console.log([newBuiltCar]);
}

const newCar1 = new Factory("car", "May 17", "Cabriolet", 2021);
const newCar2 = new Factory("car", "May 16", "Limousine", "2021");
const newCar3 = new Factory("car", "May 15", "Truck", 2021);
const newCar4 = new Factory("car", "May 14", "Racing car", 2021);
const newCar5 = new Factory("car", "May 13", "Ambulance", 2021);
const newCar6 = new Factory("car", "May 12", "Fire Truck", 2021);
const newCar7 = new Factory("car", "May 11", "Cabrio", 2021);
const newCar8 = new Factory("car", "May 10", "Extra-long Limo", 2021);
const newCar9 = new Factory("car", "May 9", "Heavy truck", 2021);
const newCar10 = new Factory("no car", "May 8", "Bicycle", 2021);
console.log([
  newCar1,
  newCar2,
  newCar3,
  newCar4,
  newCar5,
  newCar6,
  newCar7,
  newCar8,
  newCar9,
  newCar10,
]);

// 🤖: Nothing to see down here
