import { FC, memo } from "react";

import { ICard } from "interfaces";
import { useAppSelector } from "store/hooks";

import GameCard from "./GameCard";
import "./styles.css";

interface Props {
  card: ICard;
  flipped: boolean;
  onCardClick(card: ICard): void;
}

const GameCardContainer: FC<Props> = ({ card, flipped, onCardClick }) => {
  const cardBackImageSrc = useAppSelector(
    (state) => state.settings.cardBackImageSrc
  );

  return (
    <GameCard
      card={card}
      flipped={flipped}
      backImageSrc={cardBackImageSrc}
      onCardClick={onCardClick}
    />
  );
};

export default memo(GameCardContainer);
