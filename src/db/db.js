const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

module.exports = dbConn;
