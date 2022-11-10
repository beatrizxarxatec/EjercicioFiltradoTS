import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQL22",
  database: "xa_char_sheet"
});

export {PORT, db};