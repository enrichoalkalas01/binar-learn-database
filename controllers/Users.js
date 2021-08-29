const Express = require('express')
const Cryptr = require('cryptr')
const newCryptr = new Cryptr('Secret')

// Models
const UsersModel = require('../models2/MongoDB/Users')
const ConnectionMongoDB = require('../models2/MongoDB/Connection')

ConnectionMongoDB()

const Login = (req, res) => {
    let dataUser = req.body

    UsersModel.findOne({
        'username': dataUser.username,
    }).then(response => {
        if ( !response ) {
            console.log(response)
            console.log(`tidak ada data user ${ dataUser.username }`)
            res.send(`tidak ada data user ${ dataUser.username }`)
        } else {
            let decryptPassword = newCryptr.decrypt(response.password)
            if ( decryptPassword != dataUser.password ) {
                res.status(401).send('Password do not match')
            } else {
                let PassingDataUser = {
                    uid: response._id,
                    username: response.username,
                    fullname: response.fullname,
                    age: response.age,
                    address: response.adress,
                    email: response.email
                }
                
                res.status(200).send({
                    message: "Success to login data",
                    result: PassingDataUser
                })
            }
        }
    }).catch(err => {
        console.log(response)
        res.send('Failed To Get Data User')
    })
}

const Register = (req, res) => {
    let dataUser = req.body
    let newPassword = newCryptr.encrypt(dataUser.password)

    const User = new UsersModel({
        username: dataUser.username,
        password: newPassword,
    })

    User.save(User).then(response => {
        console.log(response)
        res.send('Success To Create Data Users')
    }).catch(error => {
        console.log(error)
        res.send('Failed To Create Data Users')
    })
}

exports.Login = Login
exports.Register = Register