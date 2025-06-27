import { Car } from "../models/carModel.js";

const carList = []

const getAllCars = () => {
  return carList;
}

const createCar = (data) => {
  const { brand, model, year, color, price } = data;
  
  if ( !brand || !model || !year || !color || !price ) return null;
  
  const newCar = new Car({
    brand,
    model,
    year,
    color,
    price
  });

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
    brand: data.brand !== undefined ? data.brand : car.brand,
    model: data.model !== undefined ? data.model : car.model,
    year: data.year !== undefined ? data.year : car.year,
    color: data.color !== undefined ? data.color : car.color,
    price: data.price !== undefined ? data.price : car.price,
  }

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
