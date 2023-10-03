const express = require("express");
const {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser
} = require("../controllers/HomeController");
const router = express.Router();

//router.method('/route', handle)
router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router; // export default
