const express = require("express");
const router = express.Router();
const { registerDetail } = require("../controller/register.controller")

router.post("/", registerDetail) 
module.exports = router;