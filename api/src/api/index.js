// Packages
import { Router } from "express";

// Routes
import about from "./routes/about";
import equipment from "./routes/equipment";

export default () => {
  const app = Router();
  about(app);
  equipment(app);

  return app;
};
