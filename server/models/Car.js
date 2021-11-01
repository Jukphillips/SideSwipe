const { Schema, model } = require("mongoose")


const carSchema = new Schema({
    year: {
        type: Number,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    trim: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    }, 
    type: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        },
    ],
    mileage: {
        type: Number,
        required: true
    },
    mpg: {
        type: String,
        required: true,
    },
    vin: {
        type: String,
    }

});

const Car = model("Car", carSchema)

mpdule.exports = Car;