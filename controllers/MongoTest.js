const Express = require('express')

// Models
const UserModels = require('../models2/MongoDB/Users')
const ProductModels = require('../models2/MongoDB/Products')
const PriceModels = require('../models2/MongoDB/Prices')
const { ProfilingLevel } = require('mongodb')
const Products = require('../models2/MongoDB/Products')
const { Aggregate } = require('mongoose')

const Tester = (req, res) => {
    UserModels.findOne({ 'username': 'alkalas' }).then(response => {
        const Products = new ProductModels({
            uid: response._id,
            username: response.username,
            productName: 'baju',
            description: 'baju nya mahal'
        })

        Products.save(Products).then(ResponseProducts => {
            res.send(ResponseProducts)
        }).catch(err => {
            console.log(err)
        })

    }).catch(err => {
        console.log(err)
    })
}

const Relation = (req, res) => {
    UserModels.findOne({ 'username': 'lisameiliana' }).then(response => {
        // Data Username
        console.log(response)
        
        const Prices = new PriceModels({
            uid: response._id,
            username: response.username,
            prices: Math.random()
        })

        Prices.save(Prices).then(response => {
            res.send(response)
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}

const agFc = (req, res) => {
    UserModels.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'username',
                foreignField: 'username',
                as: 'productsData'
            }
        },
        {
            $lookup: {
                from: 'prices',
                localField: 'username',
                foreignField: 'username',
                as: 'pricesData'
            }
        },
    ]).then(response => {
        res.send(response)
    }).catch(err => {
        console.log(err)
    })
}

exports.Tester = Tester
exports.Relation = Relation
exports.agFc = agFc

/*
{
    _id: "611fb7d966c0743f2cfda4ef",
    username: "alkalas",
    password: "f8840c7b4d958c8c61ed16abbfd48ff17cfbc9a9e312797f27bb681fdd1e2ce98d0e321cf190fe4bac33b64c1c9b4afa483cc95223d51bbe8c3fd365ded2ae1d304b360cac82d2cb5a2c7cca68b9c6cecba05c7d2feccfda83d24c9af6a244add43018340bcc9619",
    fullname: "Alkalas",
    age: "21",
    address: "depok",
    email: "admin@gmail.com",
    type: ''
    __v: 0,
}
*/