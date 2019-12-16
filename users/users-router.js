const router = require('express').Router();

const DB = require('../database/model.js');
const restricted = require('../auth/restrict-middleware.js');

router.get('/', restricted, (req, res) => {
  DB.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
