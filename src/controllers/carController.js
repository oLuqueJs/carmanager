import { Car } from "../models/carModel.js";

const data = [] // ? Temp

const findAllCars = (req,res) => {
    if (data.length == 0) {
        return res.status(404).json({ "message": "data is empty" })
    }

    res.json(data)
};

const createCar = (req, res) => {
    const { brand, model, year, color, price } = req.body;

    const car = new Car(
        brand,
        model,
        year,
        color,
        price,
    );

    data.push(car);
    res.status(201).json(car);
};

const findCarById = (req, res) => {
    const car = data.find(obj => obj.id === req.params.id)

    if (!car) {
        return res.status(404).json({ "message": "Car not found" })
    }

    res.json(car);
};

const updateCar = (req, res) => {
    const index = data.findIndex(obj => obj.id === req.params.id)

    if (index == -1) {
        return res.status(404).json({ "message": "Car not found" })
    }

    const car = data[index];
    const { model, brand, year, color, price} = req.body;

    data[index] = {
        ...car,
        model: model !== undefined ? model : car.model,
        brand: brand !== undefined ? brand : car.brand,
        year: year !== undefined ? year : car.year,
        color: color !== undefined ? color : car.color,
        price: price !== undefined ? price : car.price,
        updatedAt: new Date()
    };

    res.json(data[index])
};

const deleteCar = (req, res) => {
    const index = data.findIndex(obj => obj.id === req.params.id)

    if (index == -1) {
        return res.status(404).json({ "message": "Car not found" })
    }

    data.splice(index, 1);
    res.status(204).end()
};

export default {
    findAllCars,
    createCar,
    findCarById,
    updateCar,
    deleteCar,
};