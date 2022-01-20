import { FC } from "react";
import { Card } from "antd";

import { ICard } from "../../interfaces/Card.interface";

interface Props {
  card: ICard;
  flipped: boolean;
  onCardClick(card: ICard): void;
}

const GameCard: FC<Props> = ({ card, flipped, onCardClick }) => {
  return (
    <Card hoverable className="game-card">
      {flipped && (
        <img src={card.src} className="game-card-image" alt="front of card" />
      )}
      {!flipped && (
        <img
          src="/images/backs/4.png"
          className="game-card-image"
          alt="front of card"
          onClick={() => onCardClick(card)}
        />
      )}
    </Card>
  );
};

export default GameCard;
