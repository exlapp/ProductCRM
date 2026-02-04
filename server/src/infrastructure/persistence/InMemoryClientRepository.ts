import { Client } from "../../domain/entities/Client.js";
import { ClientRepository } from "../../domain/repositories/ClientRepository.js";

export class InMemoryClientRepository implements ClientRepository {
  private clients = new Map<string, Client>();

  async findById(id: string): Promise<Client | null> {
    return this.clients.get(id) ?? null;
  }

  async findByContact(phone?: string, email?: string): Promise<Client | null> {
    for (const client of this.clients.values()) {
      const stored = client.toJSON();
      if ((phone && stored.phone === phone) || (email && stored.email === email)) {
        return client;
      }
    }
    return null;
  }

  async save(client: Client): Promise<void> {
    this.clients.set(client.id, client);
  }
}
