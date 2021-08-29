const Express = require('express')
const App = Express()
const PORT = 7000
const Morgan = require('morgan')
const DotEnv = require('dotenv')
const mysql = require('mysql')
const mongodb = require('mongodb')
const { mongo } = require('mongoose')
const BodyParser = require('body-parser')

App.use(Morgan('dev'))
App.use(BodyParser.urlencoded({ extended: true }))
App.use(BodyParser.json())
App.listen(PORT, () => console.log(`Server is running, in PORT : ${ PORT }`))

// Routes
const Routes = require('./routes/Routes')
const UserRoutes = require('./routes/Users')
App.use(Routes)

App.use('/users', UserRoutes)