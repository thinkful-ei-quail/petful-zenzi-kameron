const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  res.send(Pets.get());
});

router.get("/:cat", (req, res) => {
  res.send(Pets.getByType(cats));
});

router.get("/:dog", (req, res) => {
  res.send(Pets.getByType(dogs));
});

router.delete("/", json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
