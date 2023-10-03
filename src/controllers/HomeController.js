const connection = require('../config/database');
const {getAllUser, getUserId, UpdateUserID} =  require('../services/CRUDServices')

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

const getUpdatePage = async(req, res) => {
    const userID = req.params.id;
    let user = await getUserId(userID);

    res.render('update.ejs',{userEdit : user});
}

const postUpdateUser = async (req, res) =>{
   
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userID = req.body.userID;
    // let {email, name, city} = req.body;
    console.log('email: ',email,'name: ',name,'city: ', city,'userID: ',userID)
    
    //   let [results, fields] = await connection.query(
    //     `UPDATE Users 
    //     SET email = ?,city = ?, name = ? 
    //     WHERE id = ?`,
    //     [email, city, name, userID]    
    //   );
    await UpdateUserID(email, city, name, userID)
      res.redirect('/');
}

module.exports={
    getHomepage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}