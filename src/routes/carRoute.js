import express from 'express'
import carController from '../controllers/carController.js';

const router = express.Router();

router.get('/', carController.findAllCars);
router.get('/:id', carController.findCarById);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;