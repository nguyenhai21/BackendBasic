const path = require('path');
const express = require('express')

const configViewEngine = (app)=>{
    console.log('>>check patt: ',path.join('./src','views'))
    app.set('views', path.join('./src','views'))
    app.set('view engine', 'ejs')

    //config static files: img, css, js
    app.use(express.static(path.join('./src', 'public')));

}

module.exports = configViewEngine;