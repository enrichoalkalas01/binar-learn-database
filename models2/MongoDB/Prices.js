const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    uid: { type: String },
    username: { type: String },
    prices: { type: String }
})

const Prices = Mongoose.model('price', Schema)
module.exports = Prices