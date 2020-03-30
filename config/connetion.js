var mysql = require('mysql');

 // MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gtswok4jrxwdv879",
  password: "drcy8f5q085wfyyc",
  database: "zdsyny9e9p5dvsh5"
});


// Initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;