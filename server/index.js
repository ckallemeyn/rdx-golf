const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'))

const cache = {};

app.post('/player', (req, res) => {
  // get player from req obj and store them in the database
  // as a temporary solution store the player in the cache
  res.sendStatus(201)
})

app.get('/player', (req, res) => {
  // get players
  const player = {
    name: 'Rory McIlroy',
    age: 30,
    image: 'https:\/\/www.thesportsdb.com\/images\/media\/player\/thumb\/wiumih1555581606.jpg'
  }
  res.json(player).status(200);
})


app.listen(PORT, () => console.log(`listening on ${PORT}`));