// Library / Packages / Third Modules
const Express = require('express')
const Routes = Express.Router()

// Components Controllers
const UsersControllers = require('../controllers/Users')
const SequelizeControllers = require('../controllers/Sequelize')
const TesterControllers = require('../controllers/Tester')
const MongoTest = require('../controllers/MongoTest')

Routes.get('/', (req, res) => {
    res.send('ini index page')
})
Routes.get('/products', (req, res) => {
    res.send('ini products page')
})

// Sequelize
Routes.get('/sequelize', SequelizeControllers.Tester)


Routes.post('/login', UsersControllers.Login)
Routes.post('/register', UsersControllers.Register)
Routes.get('/tester', TesterControllers.Index)
Routes.get('/tester/getdata', TesterControllers.GetData)
Routes.get('/mongotest', MongoTest.Tester)
Routes.get('/mongotest/relation', MongoTest.Relation)
Routes.get('/mongotest/aggregate', MongoTest.agFc)

module.exports = Routes