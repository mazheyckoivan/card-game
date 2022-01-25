import { ICard } from "interfaces";

interface IContextValues {
  cards: ICard[];
  turns: number;
  firstCard: ICard | null;
  secondCard: ICard | null;
  timeSpent: number;
  finished: boolean;
  restart(): void;
  stopTimer(): void;
  handleCardClick(Card: ICard): void;
}

export type { IContextValues };
