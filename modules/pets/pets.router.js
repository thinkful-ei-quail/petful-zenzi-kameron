const express = require("express");
const json = require("body-parser").json();

const Pets = require("./pets.service");
const People = require("../people/people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all pets currently up for adoption.
  res.send(Pets.get());
});
router.get("/cats", (req, res) => {
  // Return all cats
  res.send(Pets.getAllByType("cats"));
});

router.get("/dogs", (req, res) => {
  // Return all dogs
  res.send(Pets.getAllByType("dogs"));
});

router.get("/cat", (req, res) => {
  res.send(Pets.getByType("cats"));
});

router.get("/dog", (req, res) => {
  res.send(Pets.getByType("dogs"));
});

router.delete("/dog", json, (req, res) => {
  res.send(Pets.delete("dogs"));
});

router.delete("/cat", json, (req, res) => {
  res.send(Pets.delete("cats"));
});

module.exports = router;
