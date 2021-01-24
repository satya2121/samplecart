const express = require("express");
const router = express.Router();
const Cartontroller = require("../controllers/cart.controller");
router.get("/getall",Cartontroller.getall);

module.exports = router;
