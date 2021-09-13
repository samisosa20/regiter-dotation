// Packages
import axios from "axios";
import { validationResult } from "express-validator";

// Controlles
import equipments from "../controllers/equipment";

// Validators
import valEquipment from "../../validator/equipment";

const equipment = (app) => {
  app.get("/equipments/id", function (req, res) {
    axios
      .get("https://mockend.com/samisosa20/regiter-dotation/post")
      .then((r) => res.status(200).json(r.data))
      .catch((err) => res.secn(err));
  });
  app.get("/equipments", async (req, res) => {
    try {
      const result = await equipments("LIST", req);
      res
        .status(result.status)
        .json({ result: result.results, message: result.message });
    } catch (error) {
      res
        .status(400)
        .json({ message: { color: "danger", message: "Error de conexión." } });
    }
  });
  app.post("/equipment", valEquipment.all, async (req, res) => {
    if (!validationResult(req).isEmpty()) {
      res.status(400).json({
        result: validationResult(req),
        message: { color: "danger", message: "Error de validación." },
      });
    } else {
      try {
        const result = await equipments("INSERT", req);
        res
          .status(result.status)
          .json({ result: result.results, message: result.message });
      } catch (error) {
        res
          .status(400)
          .json({
            message: { color: "danger", message: "Error de conexión." },
          });
      }
    }
  });
  return app;
};

export default equipment;
