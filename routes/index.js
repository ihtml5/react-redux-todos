var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
    id:5,
    text:"啛啛喳喳擦擦擦",
    completed:false,
    typeId:1
  },{
    id:4,
    text:"是是是",
    completed:false,
    typeId: 0
  },{
    id: 3,
    text:"1111",
    completed: false,
    typeId: 0
  },{
    id: 2,
    text: "1擦擦擦",
    completed: false,
    typeId: 2
  }]);
});

module.exports = router;
