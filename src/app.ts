import express from 'express';
import {getMovie} from './neo-service'

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Boilerplate is working properly.');
});
app.get('/movie', (req, res) => {
  getMovie()
    .then(movie => {
      if (!movie){
        res.send('No movies')
      }
      res.json(movie)
    });
});
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});