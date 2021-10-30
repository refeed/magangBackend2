var express = require('express');
var router = express.Router();
var path = require('path')
var db = require('../db/db')

router.post('/', function(req, res, next) {
  db.run(`INSERT INTO MissionPlan(planName, g3wp) VALUES (?, ?)`,
         [req.body.namaMisi, req.body.geoJSON],
         (err) => {
           if (err) {
             console.log(err)
             res.status(500).json({status: 'error'})
             return
            };
            res.status(200).json({status: 'OK'})
         })
});

module.exports = router;