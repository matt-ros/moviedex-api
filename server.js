require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const MOVIEDEX = require('./movies-data-small.json');

const app = express();

app.use(morgan('dev'));

function handleGetMovie(req, res) {
  const { genre, country, avg_vote } = req.query;
  res.send(MOVIEDEX)
}

app.get('/movie', handleGetMovie);

const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});