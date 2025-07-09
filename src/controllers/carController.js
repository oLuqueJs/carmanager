import carService from "../services/carService.js";

const findAllCars = async (req,res) => {
    const data = await carService.getAllCars();
    if (data.length == 0) {
        return res.status(404).json({ "message": "data is empty" }).end()
    }

    res.status(200).json(data);
};

const createCar = async (req, res) => {
    const newCar = await carService.createCar(req.body);

    res.status(201).json(newCar);   
};

const findCarById = async (req, res) => {
    const car = await carService.findCarById(req.params.id);
    if (!car) {
        return res.status(404).json({ "message": "Car not found" }).end()
    }

    res.json(car);
};

const updateCar = async (req, res) => {
    const updatedCar = await carService.updateCar(req.params.id, req.body);
    if (!updatedCar) {
        return res.status(404).json({ "message": "Car not found" }).end()
    }

    res.json(updatedCar)
};

const deleteCar = async (req, res) => {
    const isDeleted = await carService.deleteCar(req.params.id)
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
