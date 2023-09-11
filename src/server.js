const express = require('express')
const path = require('path')
const mysql = require('mysql2');
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const WebRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 9000;
const hostname = process.env.HOST_NAME;



//config template engine
configViewEngine(app)

//import route
app.use('/',WebRoutes)
// app.use('/v1',WebRoutes)


//test connect
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,//default: 3306
  user: 'root',
  password: '123456',//default empty
  database: 'nguyenhai'
});
// simple query
connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log('>>>results= ',results); // results contains rows returned by server
    console.log('>>>fields= ',fields); // fields contains extra meta data about results, if available
  }
);


app.listen(port,hostname, () => {
  console.log(`Example router listening on port ${hostname} ${port}`)
})

