import { Car } from "../models/carModel.js";

const findAllCars = (req,res) => {
    res.json({test: true});
};

const createCar = (req, res) => {
const c1 = new Car("astra", "veio", 1987, "preto", 9000);
    res.json(c1);
};

const findCarById = (req, res) => {
    res.json({test: true});
};

const updateCar = (req, res) => {
    res.json({test: true});
};

const deleteCar = (req, res) => {
    res.json({test: true});
};

export default {
    findAllCars,
    createCar,
    findCarById,
    updateCar,
    deleteCar,
};