import express from 'express'
import carController from '../controllers/carController.js';
import { validateCar } from '../middlewares/validateCar.js';
import { validateUpdatedCar } from '../middlewares/validateUpdateCar.js';

const router = express.Router();

router.get('/', carController.findAllCars);
router.get('/:id', carController.findCarById);
router.post('/', validateCar, carController.createCar);
router.put('/:id', validateUpdatedCar, carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;