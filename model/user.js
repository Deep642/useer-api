const mongoose = require("mongoose");
const  autoIncrement = require('mongoose-auto-increment');

// how  document look like
const userSchema = mongoose.Schema({
    name: String,
    hobbies: String,
    email: String,
    phone: Number
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');



module.exports = mongoose.model('User', userSchema);
