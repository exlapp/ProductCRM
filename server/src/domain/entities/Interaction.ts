export type InteractionId = string;
export type InteractionType = "call" | "email" | "meeting";

export interface InteractionProps {
  id: InteractionId;
  clientId: string;
  dealId?: string;
  type: InteractionType;
  notes?: string;
  occurredAt: Date;
  ownerId: string;
  createdAt: Date;
}

export class Interaction {
  constructor(private props: InteractionProps) {}

  get id(): InteractionId {
    return this.props.id;
  }

  toJSON(): InteractionProps {
    return { ...this.props };
  }
}
