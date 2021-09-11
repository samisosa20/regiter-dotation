// Packages
import { Router } from "express";

// Routes
import test from "./routes/test";
import equipment from "./routes/equipment";

export default () => {
  const app = Router();
  test(app);
  equipment(app);

  return app;
};
