const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number
})


const model = mongoose.model('Users', schema);
module.exports = model;