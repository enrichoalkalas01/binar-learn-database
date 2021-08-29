const Express = require('express')

// Models 
const ProductsModel = require('../models2/MongoDB/Products')
const UsersModel = require('../models2/MongoDB/Users')

const Index = (req, res) => {
    const User = new UsersModel({
        username: 'enrichoalkalas',
        password: 'admin123',
    })

    User.save(User).then(response => {
        const Products = new ProductsModel({
            uid: response._id,
            username: response.username,
            productName: 'tester',
            description: 'tester dasadasdasd',
        })

        Products.save(Products).then(response => {
            res.send(response)
        }).catch(err => {
            res.send('error inputs products')
        })

    }).catch(err => {
        res.send(500)
    })
}


const GetData = (req, res) => {
    UsersModel.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'username',
                foreignField: 'username',
                as: 'productsdetails'
            }
        }
    ]).then(response => {
        res.send(response)
    }).catch(err => {
        console.log(err)
    }) 
}

exports.GetData = GetData
exports.Index = Index