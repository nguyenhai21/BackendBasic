const express = require('express');
const { getHomepage, getABC,postCreateUser,getCreatePage} = require('../controllers/HomeController');
const router = express.Router();


//router.method('/route', handle)
router.get('/', getHomepage);
router.get('/abc',getABC);
router.get('/create',getCreatePage)
router.post('/create-user',postCreateUser);

  
module.exports = router;// export default