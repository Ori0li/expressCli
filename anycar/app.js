const { carsRouter } = require("./routes/carsRouter");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // x-form-encoded 해줌
app.use(express.json());
app.use("/cars", carsRouter);

app.listen(3000, () => {
  console.log("서버 시작");
});
