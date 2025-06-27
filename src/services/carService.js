import { Car } from "../models/carModel.js";
import { CreateCarDto } from "../dtos/createCar.dto.js";

const carList = []

const getAllCars = () => {
  return carList;
}

const createCar = (data) => {
  const car = CreateCarDto(data);
  
  const newCar = new Car(
    car.brand,
    car.model,
    car.year,
    car.color,
    car.price
  );

  carList.push(newCar)

  return newCar;
}

const findCarById = (id) => {
   return carList.find(o => o.id === id)
}

const updateCar = (id, data) => {
  const i = carList.findIndex(o => o.id == id);
  if (i == -1) return undefined;

  const car = carList[i];

  carList[i] = {
    ...car,
    ...data
  };

  return carList[i];
}

const deleteCar = (id) => {
  const i = carList.findIndex(o => o.id == id);
  if (i == -1) return false;
  
  carList.splice(i, 1);
  return true;
}

export default {  
  getAllCars,
  createCar,
  findCarById,
  updateCar,
  deleteCar
}
