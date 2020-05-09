const itemCollection = require('../model/item');

// Get All Item Details
const getItems = (req, res) => {
  itemCollection.find({}, (err, data) => {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

// Get one item detail by its id
const getItem = (req, res) => {
  let id = req.params.id;
  itemCollection.findById({ _id: id }, (err, data) => {
    if (err) {
      res.json(err)
    } else {
      res.json(data);
    }
  })
}

// Create item information in database
const createItem = (req, res) => {
  let itemData = {}
  itemData['title'] = req.body.title;
  itemData['ingredients'] = req.body.ingredients;
  itemData['redirection'] = req.body.redirection;
  itemData['thumbnail'] = req.file.path;

  itemCollection.insertMany(itemData, (err, data) => {
    if (err) {
      res.json({ success: false, msg: err })
    } else {
      res.json({ success: true, msg: data });
    }
  });
}

// Update recipe information
const updateItem = (req, res) => {
  itemCollection.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.json({ success: false, msg: err })
    } else {
      res.json({ success: true, msg: data })
    }
  })
}

// delet one item detail by its id
const deleteItem = (req, res) => {
  itemCollection.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json({ success: false, msg: err })
    } else {
      res.json({ success: true, msg: 'Record deleted successfully' });
    }
  });
}

module.exports = {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem
}