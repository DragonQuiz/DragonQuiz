const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fs = require('fs');
const cors = require('cors');
const dbController = require('./controllers/dbController')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());


app.post('/login', dbController.login, (req, res) => {
  res.status(200).json(res.locals.result)
})

app.post('/createUser', dbController.createUser, (req, res) => {
  res.status(200).json(res.locals.data);
})

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../src/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.get('/', (req, res) => {
  return res.send('server received get request');
})

app.use(express.static(path.resolve(__dirname, '../src')))

app.use((req, res) => {
  res.sendStatus(404);
})

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 401,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`DragonQuiz is listening on port ${PORT}`);
});