export type ClientId = string;

export interface ClientProps {
  id: ClientId;
  firstName: string;
  lastName?: string;
  patronymic?: string;
  phone?: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Client {
  constructor(private props: ClientProps) {}

  get id(): ClientId {
    return this.props.id;
  }

  get fullName(): string {
    const parts = [this.props.lastName, this.props.firstName, this.props.patronymic].filter(Boolean);
    return parts.join(" ");
  }

  get contact(): { phone?: string; email?: string } {
    return { phone: this.props.phone, email: this.props.email };
  }

  updateContact(phone?: string, email?: string): void {
    this.props.phone = phone;
    this.props.email = email;
    this.props.updatedAt = new Date();
  }

  toJSON(): ClientProps {
    return { ...this.props };
  }
}
