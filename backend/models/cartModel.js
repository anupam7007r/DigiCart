const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref="Users" },
    products: Object,
    created: Date,
})


const model = mongoose.model('Carts', schema);
module.exports = model;