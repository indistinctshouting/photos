const express = require('express');
const app = express();
const dbMethods = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + './public/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/photos', function(req, res) {
  dbMethods.getPhotos(function(err, data) {
    if(err) {
      res.sendStatus(503);
    } else {
      console.log(data)
      res.send(data);
    }
  })
})

// app.post('/photos', function(req, res) {
//   dbMethods.insertInfo(function(err, data) {
//     if(err) {
//       console.log(err)
//     } else {
//       console.log('posted!')
//     }
//   })
// })

app.listen(3000, () => console.log('listening on port 3000!'))
