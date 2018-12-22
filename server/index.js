const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/restaurants/:restId', (req, res) => {
  // let restaurantId = req.params.
  db.Info.find({restId: req.params.restId}, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
  // res.send('Given ID is: ' + restaurantId)
  // console.log(res);
})





const port = 3003;
app.listen(port, () => console.log(`Listening on port ${port}...`));
