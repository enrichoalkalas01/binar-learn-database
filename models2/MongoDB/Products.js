const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    uid: { type: String },
    username: { type: String },
    productName: { type: String },
    description: { type: String }
})

const Products = Mongoose.model('product', Schema)
module.exports = Products