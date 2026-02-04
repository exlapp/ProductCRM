import express from "express";
import { registerRoutes } from "./interfaces/http/routes.js";

const app = express();
app.use(express.json());

registerRoutes(app);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`ProductCRM server running on port ${port}`);
});
