import { FC } from "react";
import { Card } from "antd";
import classNames from "classnames";

import { ICard } from "../../interfaces/Card.interface";

interface Props {
  card: ICard;
  flipped: boolean;
  onCardClick(card: ICard): void;
}

const GameCard: FC<Props> = ({ card, flipped, onCardClick }) => {
  const cardClassNames = classNames("game-card", { flipped: flipped });

  return (
    <Card hoverable className={cardClassNames}>
      <img src={card.src} className="game-card-image front" alt="card front" />

      <img
        src="/images/backs/1.png"
        className="game-card-image back"
        alt="card back"
        onClick={() => onCardClick(card)}
      />
    </Card>
  );
};

export default GameCard;
