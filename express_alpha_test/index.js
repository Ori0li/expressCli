const express = require("express");
const app = express();

app.get("/coffee", (req, res) => {
  res.sendFile(__dirname + "/views/coffee.html");
});

app.get("/bread", (req, res) => {
  res.status(200).json([
    { name: "초코소라빵", price: 3000 },
    { name: "크로와상", price: 4400 },
    { name: "단팥빵", price: 5050 },
    { name: "바게트", price: 10000 },
  ]);
});

app.listen(3000, () => {
  console.log("오잉");
});
