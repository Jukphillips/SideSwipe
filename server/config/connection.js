const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/carmax", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreatedIndex: true,
    useFindAndModify: false, 
});

module.exports = mongoose.connection; 