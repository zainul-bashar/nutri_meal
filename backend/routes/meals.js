const express = require("express");
const router = express();

const { isAuth } = require("../middlewares/Authmiddleware");
const { meals } = require("../controllers/meals.controller");

router.post( "/add-meals", meals );


module.exports = router;