fetch("http://localhost:3000/boradgame", {
  method: "post",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "모두의 마블",
})
  .then((v) => v.json())
  .then((v) => console.log(v));
