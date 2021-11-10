const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt")

const Inventory = require("./Inventory")

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
        type: String,
        require: true,
    },
    vechiles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Inventory",
        },
    ],
});

// Used to hash password before it enters into the database and to secure user information is secure
userSchema.pre("save", async function (next){
    if(this.password && this.isModified("password")){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);

        next();
    }

});


// Used when inserting many different user accounts that need password protection, specifically for seed data
userSchema.pre("insertMany", async function (next, docs){
    try {
        const saltRounds = 10;
        for (let x = 0; x < docs.length; x++){
            docs[x].password = await bcrypt.hash(docs[x].password, saltRounds)
        }
    } catch(err){
        console.error(error)
    }

    next();
});

// method used compare password passed in to the password actually stored. 
userSchema.methods.isCorrectPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

const User = model("User", userSchema)
module.exports = User; 