const express = require("express");
const app = express();
const dogRouter = require("./routes/dogRoutes.js");
const catRouter = require("./routes/catRouters.js");

const { dogs } = require("./data/dog.js");
const { cats } = require("./data/cat.js");

let newDogs = [...dogs];
let newCats = [...cats];

app.use(express.text());
app.use(express.json());

app.use("/dogs", dogRouter);
app.use("/cats", catRouter);

app.get("/mega/:name", (req, res) => {
  const { name } = req.params;
  res.render();
});

app.get("/all", (req, res) => {
  res.json([...newDogs, ...newCats]);
});

app.listen(3000, () => {
  const siu = "수우~";
  console.log(siu);
});
