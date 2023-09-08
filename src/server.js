const express = require('express')
const path = require('path')
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const WebRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 9000;
const hostname = process.env.HOST_NAME;



//config template engine
configViewEngine(app)

//import route
app.use('/v1',WebRoutes)


app.listen(port,hostname, () => {
  console.log(`Example router listening on port ${hostname} ${port}`)
})