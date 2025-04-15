const express = require("express");
const app = express();
app.use(express.text());

app.get("/coffee", (req, res) => {
  res.send("IT 커피");
});

app.get("/cookie", (req, res) => {
  res.json({ name: "포로쿠키", hp: 300 });
});

app.get("/bread", (req, res) => {
  const { count, size } = req.query;
  res.json({ count, size, breadName: "초코빵" });
});

app.post("/jelly", (req, res) => {
  console.log(req.body);
  res.json({ test: true });
});

app.post("/boradgame", (req, res) => {
  const { body } = req;
  res.json({ name: `${body} 노잼` });
});

app.listen(3000, () => {
  console.log("커피 퀴즈 서버 시작");
});
