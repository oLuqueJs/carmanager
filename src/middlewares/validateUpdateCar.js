import { updateCarDTO } from "../dtos/updateCar.dto.js";

export function validateUpdatedCar(req, res, next) {
  const data = updateCarDTO(req.body)
  const errors = []

  if ('brand' in data && typeof data.brand !== 'string') {
    errors.push('Field brand must be a string')
  };

  if ('model' in data && typeof data.model !== 'string') {
    errors.push('Field model must be a string');
  };

  if ('color' in data && typeof data.color !== 'string') {
    errors.push('Field color must be a string');
  };

  if ('year' in data && typeof data.year !== 'number') {
    errors.push('Field year must be a number');
  }

  if ('price' in data && typeof data.price !== 'number') {
    errors.push('Field price must be a number');
  };

  if (errors.length > 0) {
    return res.status(400).json({ errors }).end();
  };

  next();
}