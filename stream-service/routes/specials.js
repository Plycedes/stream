var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { imageName: 'img1', title: 'Massive discount on guns based on users accuracy', cols: 1, rows: 1 },
      { imageName: 'img2', title: 'Mark 3 now available on market', cols: 1, rows: 1 },
      { imageName: 'img3', title: 'Buy 2 get 1 free', cols: 1, rows: 1 },
      { imageName: 'img4', title: 'Only 1 left in stock', cols: 1, rows: 1 }
    ],
    "webCards": [
      { imageName: 'img1', title: 'Massive discount on guns based on accuracy', cols: 2, rows: 1 },
      { imageName: 'img2', title: 'Mark 3 now available on market', cols: 1, rows: 1 },
      { imageName: 'img3', title: 'Buy 2 get 1 free', cols: 1, rows: 2 },
      { imageName: 'img4', title: 'Only 1 left in stock', cols: 1, rows: 1 }
    ]
  };
  res.json(jsonResponse);
});

module.exports = router;
