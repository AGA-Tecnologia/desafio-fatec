const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kronos123',
  database: 'agaFeedback'
});

app.post("/create", (req, res) => {
  const { email } = req.body;
  db.query('INSERT INTO feedback (email) VALUES (?)',
    [email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Email added to database");
      }
    }
  )
}); // end of app.post

app.listen(3001, () => {
  console.log('Server is running on port 3001');	
})