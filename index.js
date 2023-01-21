import express from 'express';

const app = express();

const database = [
  {
    id: 1,
    name: 'John',
    age: 30,
  },
  {
    id: 2,
    name: 'alex',
    age: 16,
  },
  {
    id: 3,
    name: 'steve',
    age: 23,
  },
  {
    id: 4,
    name: 'doe',
    age: 33,
  },
];

app.get('/get', (req, res) => {
  res.json(database);
});

app.listen(3000, () => console.log('Server has been started'));
