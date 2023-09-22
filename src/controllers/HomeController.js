const connection = require('../config/database');
const {getAllUser} =  require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    let results = await getAllUser();
    
    console.log('>>>check row', results)

    return res.render('home.ejs',{listUsers: results})
}

const getABC = (req, res)  => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) =>{
   

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let {email, name, city} = req.body;
    console.log('email: ',email,'name: ',name,'city: ', city)
    
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //      VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results) {
    //       console.log('>>>check:',results);
    //       res.send('create user')
    //     }
    //   );

      let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
         VALUES (?, ?, ?)`,
        [email, name, city]    
      );
      console.log('>>check results',results);
      res.send('create user')

    // const [results, fields] = await connection.query('select * from Users u');
    // console.log('>>check results',results);  
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