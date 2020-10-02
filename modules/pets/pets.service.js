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
    return pets.show();
  },

  getByType(type) {
    return pets.show(type);
  },

  dequeue(type) {
    pets.dequeue(type);
  },
};
