const {Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")

const dealerSchema = new Schema({
    location: {
        type: String,
        required: true,
    },
    storeNumber: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true, 
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    vechiles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Inventory",
        },
    ],

});

userSchema.pre("save", async function (next){
    if(this.password && this.ismodified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);

        next();
    }
})


userSchema.pre("insertMany", async function (next, docs) {
    try {
        const saltRounds = 10;
        for (let x = 0; x < docs.length; x++) {
            docs[x].password = await bcrypt.hash(dpcs[x].password, saltRounds)
        }
    } catch (error) {
        console.log(error)
    }

    next();
})

userSchema.methods.isCorrectpassaword = function (password) {
    return bcrypt.compareSync(password, this.password)
}