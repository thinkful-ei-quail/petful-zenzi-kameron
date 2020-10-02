const express = require("express");
const json = require("body-parser").json();

const People = require("./people.service");

const router = express.Router();

router.get("/", (req, res) => {
  // Return all the people currently in the queue.
  res.send(People.get());
  //send a response
});

router.post("/", json, (req, res) => {
  // Add a new person to the queue.
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      error: `Missing name in request body`,
    });
  People.add(name);
  res.sendStatus(201);
});

module.exports = router;
