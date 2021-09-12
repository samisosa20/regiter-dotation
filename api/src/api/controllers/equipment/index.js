// Packages
import mysql from "mysql";
import axios from "axios";
import { makeDb } from "mysql-async-simple";
import "regenerator-runtime/runtime";

// Settings
import config from "../../../config";

const db = makeDb();

const validateSerial = async () => {
  return await axios
      .get("https://mockend.com/samisosa20/regiter-dotation/post")
      .then((r) => {return r.data})
      .catch((err) => res.secn(err));
}

const equipments = async (method, req) => {
  const result = {
    status: 200,
    results: [],
    message: {
      color: "bg-green-500",
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
    LIST: `SELECT * FROM test.asignaciones;`,
    INSERT: `INSERT INTO test.asignaciones (serial, owner, email, name, system, type, date)
    VALUES ('${req.body.serial || req.query.serial}', '${req.body.owner || req.query.owner}', '${req.body.email || req.query.email}', '${req.body.name || req.query.name}',
    '${req.body.system || req.query.system}', '${req.body.type || req.query.type}', NOW())`
  }
  try {
    if(method === 'INSERT') {
      const listSerial = await validateSerial()
      if(listSerial.find(e => e.serial === req.body.serial || e.serial === req.query.serial) !== undefined) {
        result.results = await db.query(connection, queries[method]);
      } else {
        result.status = 400;
        result.message.color = "bg-red-500";
        result.message.message = "El numero serial no se encuentra registrado.";
      }
    }
    if (
      result.message.color !== "warning" &&
      result.results.affectedRows === 0 &&
      (method === "UPDATE" || method === "DELETE" || method === "INSERT")
    ) {
      result.message.color = "bg-red-500";
      result.message.message = "Los datos no se han guardado correctamente.";
    } else {
      result.results = await db.query(connection, queries["LIST"]);
    }
  } catch (e) {
    result.status = 400;
    result.results = e;
    result.message.color = e.errno === 1062 ? "bg-yellow-500" : "bg-red-500";
    result.message.message = e.errno === 1062 ? "EL equipo ya se encuentra asignado" : "Los datos no se han guardado correctamente.";
  } finally {
    await db.close(connection);
  }

  return result;
}


export default equipments