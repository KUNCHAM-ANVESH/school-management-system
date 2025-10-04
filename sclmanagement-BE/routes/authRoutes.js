const express = require("express")
const authController = require("../controllers/authController")

const router = express.Router();

//Route to register/create new user.
router.post('/register', authController.registerUser);

//Route to login the user.
router.post('/login', authController.loginUser)

module.exports = router