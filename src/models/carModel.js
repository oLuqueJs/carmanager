import mongoose, { mongo } from "mongoose";

const carSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
}, {
    timestamps: true
});

export const Car = mongoose.model('Car', carSchema);