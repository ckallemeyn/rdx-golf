const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'))

app.listen(PORT, () => console.log(`listening on ${PORT}`));