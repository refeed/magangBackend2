var express = require('express');
var router = express.Router();
var path = require('path')
var sqlite3 = require('sqlite3')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'htmls', 'index.html'))
});

router.post('/', function(req, res, next) {
  
  res.status(200).json({status: 'OK'})
});



module.exports = router;
