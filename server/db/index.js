var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.con = mysql.createConnection({
  host: "localhost",
  database: "chat",
  user: "root",
  password: ""
});

exports.con.connect(function(err) {
  if (err) {
    throw err;
    console.log("Connected!");
  }
});

