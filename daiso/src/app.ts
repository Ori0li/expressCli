import express from "express";
import daisoRouter from "../routers/daisoRouter";

const app = express();
app.use(express.urlencoded({ extended: true })); // x-form-encoded 해줌
app.use(express.json());
app.use("/daiso", daisoRouter);

app.listen(3000, () => {
  console.log("서버 시작");
});
