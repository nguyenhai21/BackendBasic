const connection = require('../config/database')

const getHomepage = (req, res) => {
    // let user= [];

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function(err, results, fields) {
    //       user = results;
    //       console.log('>>>results= ',results); // results contains rows returned by server
    //       console.log('>>>check user: ', user)
    //       res.send(JSON.stringify(user));
    //     }
    //   );
    // res.send('Hello World!@@@@@@')
    return res.render('home.ejs')
}

const getABC = (req, res)  => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) =>{
   

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let {email, name, city} = req.body;
    console.log('email: ',email,'name: ',name,'city: ', city)
    
    connection.query(
        `INSERT INTO Users (email, name, city)
         VALUES (?, ?, ?)`,
        [email, name, city],
        function(err, results) {
          console.log('>>>check:',results);
          res.send('create user')
        }
      );
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports={
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage
}