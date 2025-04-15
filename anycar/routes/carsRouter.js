const { carService } = require("../services/carService");
const { validatorCarData } = require("../middleware/validator");
const { existor } = require("../middleware/existor");
const express = require("express");
const carsRouter = express.Router();

carsRouter.get("/", (req, res) => {
  res.json(carService.getAll());
});

carsRouter.get("/:id", existor, (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "챠량조회 완료", data: { car: req.car } });
});

carsRouter.post("/", validatorCarData, (req, res) => {
  carService.create(req.body);
  res.status(200).json({ success: true, message: "차량등록 완료" });
});

carsRouter.put("/", (req, res) => {
  const result = carService.update(req.body);
  if (!result)
    res.status(404).json({ success: false, message: "그런 차 없음" });
  res.status(200).json({ success: true, message: "차량수정 완료" });
});

carsRouter.delete("/", (req, res) => {
  const result = carService.delete(req.body.id);
  if (!result)
    res.status(404).json({ success: false, message: "그런 차 없음" });
  res.status(200).json({ success: true, message: "차량삭제 완료" });
});

module.exports = { carsRouter };
