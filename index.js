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
  res.json(database).status(200);
});
app.post('/post', (req, res) => {
  database.push({
    id: 5,
    name: 'john doe',
    age: 19,
  });
  res.json(database).status(201);
});
app.delete('/delete', (req, res) => {
  database.pop();
  res.json(database).status(201);
});
app.put('/put', (req, res) => {
  database.map((user, index) => {
    if (user.id === 1) {
      database[index] = { id: 123, name: 'Johns', age: 34 };
    }
    return user;
  });
  res.json(database).status(201);
});
app.listen(3000, () => console.log('Server has been started'));
