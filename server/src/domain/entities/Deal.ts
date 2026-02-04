export type DealId = string;
export type DealStage = "lead" | "proposal" | "negotiation" | "won" | "lost";

export interface DealProps {
  id: DealId;
  clientId: string;
  title: string;
  amount: number;
  stage: DealStage;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Deal {
  constructor(private props: DealProps) {}

  get id(): DealId {
    return this.props.id;
  }

  updateStage(stage: DealStage): void {
    this.props.stage = stage;
    this.props.updatedAt = new Date();
  }

  toJSON(): DealProps {
    return { ...this.props };
  }
}
