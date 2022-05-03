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

dbController.findUser = (req, res, next) => {
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
      message: { err: err }
    })
  })
}

dbController.checkPassword = (req, res, next) => {
  if (res.locals.result.length === 0) {
    res.locals.result = 'Invalid Username/Password';
    return next();
  } else {
    if (res.locals.result[0].password === req.body.password) {
      return next();
    } else {
      res.locals.result = 'Invalid Username/Password';
      return next();
    }
  }
}

dbController.createQuestion = (req, res, next) => {
  const { company_name, interview_round, job_type, question_type, question_name, question, answer, question_creator } = req.body;
  const queryString = {
    text: `INSERT INTO Questions (
      company_name,
      interview_round,
      job_type,
      question_type,
      question_creator,
      question_name,
      question,
      answer
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    values: [company_name, interview_round, job_type, question_type, question_creator, question_name, question, answer]
  };
  console.log(queryString.values)
  db.query(queryString.text, queryString.values)
    .then((result) => {
      console.log('incside .then')
      const data = {
        company_name: company_name,
        interview_round: interview_round,
        job_type: job_type,
        question_type: question_type,
        question_name: question_name,
        question: question,
        answer: answer,
        question_creator: question_creator
      }
      res.locals.data = data;
      return next();
    })
    .catch((err) => {
      console.log('we entered the catch statement')
      return next(err);
    });
}

dbController.getAllQuestions = (req, res, next) => {
  const queryString = `SELECT * FROM Questions`;

  db.query(queryString)
   .then(data => {
     res.locals.data = data.rows
     return next()
   })
   .catch(err => {
     next({
       log: 'dbController.getAllQuestions middleware failed',
       message: { err: err }
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

// { "company_name": "google",
//   "interview_round": "1",
//   "job_type": "BE",
//   "question_type": "Data Structures",
//   "question_name": "Circular Linked List",
//   "question": "Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.",
//   "answer": "do this first, then do this next, then do this last"
//   "question_creator": "kamartinng"
// }