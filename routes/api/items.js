const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/item");

//Get request   api/items

router.get("/", (req, res) => {
  Item.find().then((items) => res.json(items));
});

//Post request   api/items

router.post("/", (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    ingredients: req.body.ingredients,
    redirection: req.body.redirection,
    thumbnail: req.body.thumbnail,
  });
  newItem.save().then((item) => res.json(item));
});

//Delete request   api/items

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;