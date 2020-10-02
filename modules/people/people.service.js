const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all();
  },

  add(person) {
    people.enqueue(person);
  },

  delete(person) {
    people.dequeue(person);
  },
};
