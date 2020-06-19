const express = require("express");
const router = express.Router();

//@route GET api/auth
//@desc get loged in users
//@acces private

router.get("/", (req, res) => {
  res.send("get loged in users");
});

//@route POST api/auth
//@desc auth user get token
//@acces public

router.post("/", (req, res) => {
  res.send("auth user get token");
});
module.exports = router;
