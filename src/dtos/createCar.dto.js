export function CreateCarDto(data) {
  return {
    brand: data.brand,
    model: data.model,
    year: data.year,
    color: data.color,
    price: data.price,
  }
}