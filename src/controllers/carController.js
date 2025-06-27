import carService from "../services/carService.js";

const findAllCars = (req,res) => {
    const data = carService.getAllCars();
    if (data.length == 0) {
        return res.status(404).json({ "message": "data is empty" }).end()
    }

    res.status(200).json(data);
};

const createCar = (req, res) => {
    const newCar = carService.createCar(req.body);

    res.status(201).json(newCar);   
};

const findCarById = (req, res) => {
    const car = carService.findCarById(req.params.id);
    if (!car) {
        return res.status(404).json({ "message": "Car not found" }).end()
    }

    res.json(car);
};

const updateCar = (req, res) => {
    const updatedCar = carService.updateCar(req.params.id, req.body);
    if (!updatedCar) {
        return res.status(404).json({ "message": "Car not found" }).end()
    }

    res.json(updatedCar)
};

const deleteCar = (req, res) => {
    const isDeleted = carService.deleteCar(req.params.id)
    if (!isDeleted) {
        return res.status(404).json({ "message": "Car not found" }).end()
    }
    
    res.status(204).end()
};

export default {
    findAllCars,
    createCar,
    findCarById,
    updateCar,
    deleteCar,
};
