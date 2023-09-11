const express = require('express');
const { getHomepage, getABC } = require('../controllers/HomeController');
const router = express.Router();


//router.method('/route', handle)
router.get('/', getHomepage);
router.get('/abc',getABC);
  
module.exports = router;// export default