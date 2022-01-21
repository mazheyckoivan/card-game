import { ICard } from "../../interfaces/Card.interface";

interface IContextValues {
  cards: ICard[];
  turns: number;
  firstCard: ICard | null;
  secondCard: ICard | null;
  timeSpent: number;
  restart(): void;
  handleCardClick(Card: ICard): void;
}

export type { IContextValues };
