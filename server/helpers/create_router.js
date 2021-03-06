const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

//index
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.console(err);
      res.status(500);
      res.json({status:500, error: err});
    });
  });

//show a single card
router.get('/:id', (req, res) => {
  const id = req.params.id;
  collection
  .findOne({_id: ObjectId(id)})
  .then((doc) => res.json(doc))
  .catch((err) => {
    console.console(err);
    res.status(500);
    res.json({status:500, error: err});
  });
});

// update a question
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  delete updatedData._id;

  collection
  .findOneAndUpdate({ _id: ObjectId(id) }, { $set: updatedData }, {returnOriginal: false})
  .then(result => {
    res.json(result.value);
  })
  .catch((err) => {
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

//add a new question_card
router.post('/', (req, res) => {
  const newData = req.body;
  collection
  .insertOne(newData)
  .then((result) => {
    console.log(result)
    res.json(result.ops[0])
  })
  .catch((err) => {
    console.console(err);
    res.status(500);
    res.json({status:500, error: err});
  });
});

  // delete a card
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectId(id) })
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
});

  return router;
}
module.exports = createRouter;
