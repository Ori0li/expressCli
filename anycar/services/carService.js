const { cars } = require("../data/cars");

// Router  : 길 안내
// Service : DB 처리, 계산, 분기처리 등

const carService = {
  getAll() {
    return cars;
  },
  getById(id) {
    return cars.find((v) => v.id === id);
  },
  create(id, name) {
    const [date, entryTime] = new Date().toISOString().split("T");
    const newCar = { id, name, date, entryTime };
    cars.push(newCar);
  },
  update(carData) {
    const existCar = cars.find((v) => v.id === carData.id);
    if (!existCar === -1) return false;
    cars[existCar] = { ...carData };
    return true;
  },
  delete(id) {
    const existCar = cars.findIndex((v) => v.id == id);
    if (existCar === -1) return false;
    cars.splice(existCar, 1);
    return true;
  },
};

module.exports = { carService };
