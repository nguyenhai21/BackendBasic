const connection = require('../config/database')

const getHomepage = (req, res) => {
    let user= [];

    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
          user = results;
          console.log('>>>results= ',results); // results contains rows returned by server
          console.log('>>>check user: ', user)
          res.send(JSON.stringify(user));
        }
      );
    // res.send('Hello World!@@@@@@')
}

const getABC = (req, res)  => {
    res.render('sample.ejs')
}

module.exports={
    getHomepage,
    getABC
}