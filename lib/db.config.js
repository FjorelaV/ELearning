import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PORT } = process.env;

export const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT,
});

export const dbConnection = () => {
  connection.connect();
};
