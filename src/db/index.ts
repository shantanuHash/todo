import mysql from "mysql2/promise";

const dbConn = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "users",
  connectionLimit: 10,
});

export default dbConn;
