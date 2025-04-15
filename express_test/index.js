const express = require("express");
const app = express();

app.get("/coke", (req, res) => {
  const { query } = req;
  const { size, liter } = query;
  res.send(`size는 ${size || "M"}이고, 콜라 ${liter || 0}ml 나왔습니다.`);
});

app.get("/major", (req, res) => {
  const { query } = req;
  const { name } = query;
  const majorMap = [
    { name: "사회과학대", majors: ["경영", "경제", "통계"] },
    { name: "인문학대", majors: ["국어", "영어", "일어"] },
    { name: "자연과학대", majors: ["물리", "화학", "천문"] },
    { name: "노인학대", majors: ["이지헌패고싶다"] },
  ];

  const target = majorMap.find((v) => v.majors.some((v1) => v1 == name));

  res.send(`${name}학과는 <h1 style="color: red">${target.name}</h1>입니다.`);
});

app.listen(3000, () => {
  console.log("시작함");
});
