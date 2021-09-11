// Packages
import mysql from "mysql";
import { makeDb } from "mysql-async-simple";
import "regenerator-runtime/runtime";

// Settings
import config from "../../../config";

const db = makeDb();

const equipments = async (method, req) => {
  const result = {
    status: 200,
    results: [],
    message: {
      color: "success",
      message: "Los datos se han guardado correctamente.",
    },
  };

  const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });

  try {
    await db.connect(connection);
  } catch (e) {
    result.results = e;
    result.status = 500;
    return result;
  }

  const queries = {
    LIST: `SELECT * FROM test.asignaciones;`
  }

  try {
    result.results = await db.query(connection, queries[method]);
  } catch (e) {
    result.status = 500;
    result.results = e;
    result.message.color = "danger";
    result.message.message = "Los datos no se han guardado correctamente.";
  } finally {
    await db.close(connection);
  }

  return result;
}


export default equipments