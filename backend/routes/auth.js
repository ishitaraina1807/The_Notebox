const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const obj = {
    a: 'ishita',
    number: 18
  };

  res.json(obj);
});

module.exports = router;
