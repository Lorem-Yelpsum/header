const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');
const template = require('././templates/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/header/:restId', (req, res) => {
  let restId = req.params.restId;
  res.status(200).send(template(restId));
})

app.get('/restaurants/:restId', (req, res) => {
  db.Info.find({restId: req.params.restId}, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error in server"});
    }
    res.status(200).json(data);
  })
})

const port = 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));
