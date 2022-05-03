const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (req, res) => {
  return res.send('server received get request');
})

app.use((req, res) => {
  res.status(400).send(`this is not the page you're looking for`);
})

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`DragonQuiz is listening on port ${PORT}`);
});