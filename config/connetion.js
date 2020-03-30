var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL){
console.log(  'heroku'  )

  connection= mysql.createConnection(process.env.JAWSDB_URL)

}else{

  console.log("local connection")

  // MySQL DB Connection Information (remember to change this with our specific credentials)
 connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "root",
   database: "burgers_db"
  });


}  



// Initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;