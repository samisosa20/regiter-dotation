// Controlles
import equipments from "../controllers/equipment";
import axios from "axios";

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
  return app;
};

export default equipment;
