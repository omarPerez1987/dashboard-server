import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const SQL_HOST = process.env.SQL_HOST;
const SQL_USER = process.env.SQL_USER;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_DATABASE = process.env.SQL_DATABASE;

export const connectionSQL = async () => {
  try {
    const connection = await mysql.createConnection({
      host: SQL_HOST,
      user: SQL_USER,
      password: SQL_PASSWORD,
      database: SQL_DATABASE
    });

    console.log("Conexión a MariaDB establecida correctamente");
    return connection;
  } catch (error) {
    console.error("Error al conectar a MariaDB:", error);
    throw error;
  }
};

export const executeQuery = async (query: string, params?: any[]) => {
  const connection = await connectionSQL();
  try {
    return await connection.execute(query, params);
  } finally {
    connection.end();
  }
};