import { v4 as uuidv4 } from 'uuid';

export class Car {
    constructor(brand, model, year, color, price){
        this.id = uuidv4();
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }
}