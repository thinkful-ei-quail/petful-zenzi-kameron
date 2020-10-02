const Queue = require("../queue/Queue");
const store = require("../../store");
const { cats, dogs } = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    let cats = pets.cats.all();
    let dogs = pets.dogs.all();
    return { cats, dogs };
  },

  getByType(type) {
    return pets[type].show();
  },

  delete(type) {
    return pets[type].dequeue();
  },
};
