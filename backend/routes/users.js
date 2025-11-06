const express = require("express");
const router = express();
const {registerUser, loginUser, logOut} = require("../controllers/user.controllers");
const { isAuth } = require("../middlewares/Authmiddleware");

router.post( "/register", registerUser );
router.post( "/login", loginUser );
router.post( "/logout", isAuth, logOut );

module.exports = router;