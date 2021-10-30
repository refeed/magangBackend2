var express = require('express');
var router = express.Router();
var path = require('path')
var db = require('../db/db')
// Tantangan:
// Buat endpoint GET buat dapetin misi yang ada di MissionPlan
// Hint:
// router.get()
// 'SELECT * FROM MissionPlan'
// Pake fungsi db.all()
// Kirim rows dari callback db.all(), pakai res.json()
// contoh: res.json(rows)

router.get('/', (req, res, next) => {
  db.all('SELECT * FROM MissionPlan', (err, rows) => {
    if (err) {
      console.log(err)
      res.status(500).json({status: 'error'})
      return
    };

    res.json(rows)
  })
})

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
