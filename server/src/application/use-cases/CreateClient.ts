import { randomUUID } from "node:crypto";
import { Client } from "../../domain/entities/Client.js";
import { ClientRepository } from "../../domain/repositories/ClientRepository.js";
import { CreateClientInput } from "../dto/CreateClientInput.js";

export class CreateClient {
  constructor(private clientRepository: ClientRepository) {}

  async execute(input: CreateClientInput): Promise<Client> {
    const existing = await this.clientRepository.findByContact(input.phone, input.email);
    if (existing) {
      throw new Error("Client already exists");
    }

    const now = new Date();
    const client = new Client({
      id: randomUUID(),
      firstName: input.firstName,
      lastName: input.lastName,
      patronymic: input.patronymic,
      phone: input.phone,
      email: input.email,
      createdAt: now,
      updatedAt: now
    });

    await this.clientRepository.save(client);
    return client;
  }
}
