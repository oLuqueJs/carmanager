import { CreateCarDto } from "../dtos/createCar.dto.js";

export function validateCar(req, res, next) {
  const car = CreateCarDto(req.body);
  const errors = [];

  if (!car.brand || typeof car.brand !== "string") {
    errors.push('Field brand is mandatory and it must be a string');
  } 

  if (!car.model || typeof car.model !== "string") {
    errors.push('Field model is mandatory and it must be a string');
  }
  
  if (!car.year || typeof car.year !== "number") {
    errors.push('Field year is mandatory and it must be a number');
  }
  
  if (!car.color || typeof car.color !== "string") {
    errors.push('Field color is mandatory and it must be a string');
  }

  if (!car.price || typeof car.price !== "number") {
    errors.push('Field price is mandatory and it must be a number');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors }).end();
  }

  req.body = car;

  next();
}