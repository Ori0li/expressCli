const { carService } = require("../services/carService");

const existor = (req, res, next) => {
  const { id } = req.params;
  const car = carService.getById(id);
  if (!car) res.status(404).json({ success: false, message: "그런 차 없음" });
  req.car = car;
  next();
};

module.exports = { existor };
