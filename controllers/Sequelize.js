const { Sequelize } = require('sequelize');
const Express = require('express')

// Models Components
const db = require('../models')
db.sequelize.sync()
const { User } = require('../models')

const Tester = async (req, res) => {
    User.findAll(
        {
            where: {
                id: 2
            }
        }
    ).then(response => {
        console.log(response)
        res.send({
            message: 'success to get data user',
            data: response
        })
    }).catch(err => {
        console.log(err)
    })

    // res.send('success link')
}

exports.Tester = Tester