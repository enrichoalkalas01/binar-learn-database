const ConnectionToMysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'binar'
})

// Connect To Database
ConnectionToMysql.connect( (err, ResponseConnect) => {
    if ( err ) console.log(err)
    if ( ResponseConnect ) {
        console.log('Success Connect To Database')
    }
})

// Create Database
// let QueryCreateDatabase = "CREATE DATABASE binar"
// ConnectionToMysql.query(QueryCreateDatabase, (err, ResultCreate) => {
//     if (err) console.log('Cant Create Database')
//     if ( ResultCreate ) {
//         console.log(ResultCreate)
//     }
// })

// Create Table
// let QueryCreateTable = "CREATE TABLE users ( name VARCHAR(255), email varchar(255), address varchar(255) )"
// ConnectionToMysql.query(QueryCreateTable, (err, ResultTable) => {
//     if (err) {
//         console.log(err)
//         console.log('Cant Create Table To Database')
//     }
//     if ( ResultTable ) {
//         console.log('Success To Create Table')
//     }
// })


// Insert Data / Input Data To Database
let QueryInsert = "INSERT INTO users ( name, email, address ) VALUES ( '() => { console.log(users) }', 'admin@gmail.com', 'Depok' )"
ConnectionToMysql.query(QueryInsert, (err, ResultInsert) => {
    if (err) {
        console.log(err)
        console.log('Cant Insert Data Into Table')
    }

    if ( ResultInsert ) {
        console.log('Success Insert The Data In To Table')
    }
})