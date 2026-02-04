import { Express, Request, Response } from "express";
import { CreateClient } from "../../application/use-cases/CreateClient.js";
import { InMemoryClientRepository } from "../../infrastructure/persistence/InMemoryClientRepository.js";

const clientRepository = new InMemoryClientRepository();
const createClient = new CreateClient(clientRepository);

export const registerRoutes = (app: Express): void => {
  app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  app.post("/clients", async (req: Request, res: Response) => {
    try {
      const client = await createClient.execute(req.body);
      res.status(201).json(client.toJSON());
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(400).json({ error: message });
    }
  });
};
