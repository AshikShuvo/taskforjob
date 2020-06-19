const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc get all user contacts
//@acces private

router.get("/", (req, res) => {
  res.send("get all user contacts");
});

//@route POST api/contacts
//@desc add new contacts
//@acces private

router.post("/", (req, res) => {
  res.send("add new contacts");
});

//@route PUT api/contacts
//@desc Update a contact
//@acces private

router.put("/:id", (req, res) => {
  res.send("Update a contact");
});
//@route DELETE api/contacts
//@desc DELETE a contact
//@acces private

router.delete("/:id", (req, res) => {
  res.send("DELETE a contact");
});
module.exports = router;
