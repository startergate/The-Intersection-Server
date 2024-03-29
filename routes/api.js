/*jshint esversion: 9 */

const express = require('express');
const fs = require('fs');
var router = express.Router();

router.put('/:pid', (req, res, next) => {
  console.log(req.body);
  fs.writeFile("./public/json/" + req.params.pid + ".json", req.body.data, err => {

    console.log(req.body.data);
    if (err) {
      console.log(err);
      //res.status(400);
    } else res.status(200);
  });
  res.end();
});

router.get('/:pid', (req, res, next) => {
  fs.readFile("./public/json/" + req.params.pid + ".json", "utf-8", (err, data) => {
    if (err) {
      res.end("{}");
      return;
    }
    res.send(data);
  });
});

module.exports = router;