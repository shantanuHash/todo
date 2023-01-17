const mysql = require("mysql2");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

module.exports = dbConn;
