const express = require("express");
const catRouter = express.Router();
const { cats } = require("../data/cat.js");

let newCats = [...cats]; // const를 let으로 변경

catRouter.get("/", (req, res) => {
  const { minAge = 0, maxAge = 100, gender } = req.query;
  const filteredCats = newCats
    .filter((v) => v.age >= +minAge && v.age <= +maxAge)
    .filter((v) => !gender || v.gender === gender);
  res.json(filteredCats);
});

catRouter.post("/", (req, res) => {
  const { name, age, species, gender } = req.body;
  const newCat = { name, age, species, gender };
  newCats = [...cats, newCat];
  console.log(newCats);
  res.json(newCats);
});

catRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const cat = newCats[+id];
  res.json(cat);
});

module.exports = catRouter;
