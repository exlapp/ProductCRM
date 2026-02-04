import { Client, ClientId } from "../entities/Client.js";

export interface ClientRepository {
  findById(id: ClientId): Promise<Client | null>;
  findByContact(phone?: string, email?: string): Promise<Client | null>;
  save(client: Client): Promise<void>;
}
