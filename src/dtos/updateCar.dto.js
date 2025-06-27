export function updateCarDTO(data) {
  const allowedFields = ['brand', 'model', 'color', 'year', 'price'];
  const car = {};

  for (const key of allowedFields) {
    if (data[key] !== undefined) {
      car[key] = data[key];
    }
  }

  return car;
}