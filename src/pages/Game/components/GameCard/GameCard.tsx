import { FC, memo } from "react";
import { Card } from "antd";
import classNames from "classnames";

import { ICard } from "interfaces";

interface Props {
  card: ICard;
  flipped: boolean;
  backImageSrc: string;
  onCardClick(card: ICard): void;
}

const GameCard: FC<Props> = ({ card, flipped, backImageSrc, onCardClick }) => {
  const cardClassNames = classNames("game-card", { flipped: flipped });

  return (
    <Card hoverable className={cardClassNames}>
      <img src={card.src} className="game-card-image front" alt="card front" />

      <img
        src={backImageSrc}
        className="game-card-image back"
        alt="card back"
        onClick={() => onCardClick(card)}
      />
    </Card>
  );
};

export default memo(GameCard);
