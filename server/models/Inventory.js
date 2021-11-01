const { Schema, model} = require("mongoose")
const Car = require("./Car")

const inventorySchema = newSchema({
   name: {
       type: String,
       required: true,
   },
   cars: [
       {
           type: Schema.Types.ObjectId,
           ref: "Car"
       },
   ],
});

const Inventory = model("Inventory", inventorySchema)
module.exports = Inventory