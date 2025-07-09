import { Car } from "../models/carModel.js";
import { CreateCarDto } from "../dtos/createCar.dto.js";


const getAllCars = async () => {
  return await Car.find();
}

const createCar = async (data) => {
    const newCar = new Car(data);
    const response = await newCar.save();
    return response
}

const findCarById = async (id) => {
  return await Car.findById(id);
}

const updateCar = async (id, data) => {
  return await Car.findByIdAndUpdate(id, data, { new: true });
}

const deleteCar = async (id) => {
  return await Car.findByIdAndDelete(id);
}

export default {  
  getAllCars,
  createCar,
  findCarById,
  updateCar,
  deleteCar
}
