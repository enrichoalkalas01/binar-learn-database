const Express = require('express')
const Routes = Express.Router()

Routes.get('/login', (req, res) => {
    console.log('login')
    res.send('login')
})

module.exports = Routes