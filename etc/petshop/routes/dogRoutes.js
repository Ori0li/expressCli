const express = require("express");
const dogRouter = express.Router();
const { dogs } = require("../data/dog.js");

let newDogs = [...dogs]; // const를 let으로 변경

// ?minAge=?&maxAge=&gender=?
dogRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const filteredDogs = newDogs
    .filter((v) => v.age >= +minAge && v.age <= +maxAge)
    .filter((v) => !gender || v.gender === gender);
  res.json(filteredDogs);
});

dogRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  const newDog = { name, age, species, gender };
  newDogs = [...dogs, newDog];
  console.log(newDogs);
  res.json(newDogs);
});

dogRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const dog = newDogs[+id];
  res.json(dog);
});

module.exports = dogRouter;
