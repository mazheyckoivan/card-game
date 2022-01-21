import { FC } from "react";
import { useAppSelector } from "../../../store/hooks";

import useGameManager from "../../context/GameManager/useGameManager";
import { ICard } from "../../interfaces/Card.interface";

import GameCard from "./GameCard";
import "./styles.css";

interface Props {
  card: ICard;
}

const GameCardContainer: FC<Props> = ({ card }) => {
  const cardBackImageSrc = useAppSelector(
    (state) => state.settings.cardBackImageSrc
  );

  const { firstCard, secondCard, handleCardClick } = useGameManager();
  const isCardFlipped =
    card === firstCard || card === secondCard || Boolean(card.matched);

  return (
    <GameCard
      card={card}
      flipped={isCardFlipped}
      backImageSrc={cardBackImageSrc}
      onCardClick={handleCardClick}
    />
  );
};

export default GameCardContainer;
