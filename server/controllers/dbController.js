const db = require('../modal.js');

const dbController = {}

dbController.createUser = (req, res, next) => {
  const {username, password, email, first_name, last_name, cohort, cohort_number } = req.body;
  const queryString = {
    text: `INSERT INTO Users (
      username, 
      password,
      email,
      first_name,
      last_name,
      cohort,
      cohort_number) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    values: [username, password, email, first_name, last_name, cohort, cohort_number]
  };
  db.query(queryString.text, queryString.values)
    .then((result) => {
      const data = {  
        username: username, 
        password: password,  
        email: email,
        first_name: first_name,
        last_name: last_name,
        cohort: cohort,
        cohort_number: cohort_number
      }
      res.locals.data = data;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
}

dbController.login = (req, res, next) => {
  const { username, password } = req.body
  const queryText = `SELECT * FROM users WHERE username = $1`
  const params = [username]
  db.query(queryText, params)
  .then(data => {
    res.locals.result = data.rows
    next()
  })
  .catch(err => {
    return next({
      log: `dbController.login middleware failure with query`,
      message: { err: err}
    })
  })
}


module.exports = dbController;


// { 
//   "username": "ammardoo", 
//   "password": "12345",  
//   "email": "ammarulz@gmail.com",
//   "first_name": "Ammar",
//   "last_name": "Doo",
//   "cohort": "LA",
//   "cohort_number": 49
// }