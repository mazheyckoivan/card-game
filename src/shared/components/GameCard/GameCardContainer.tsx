import { FC } from "react";

import useGameManager from "../../context/GameManager/useGameManager";
import { ICard } from "../../interfaces/Card.interface";

import GameCard from "./GameCard";
import "./styles.css";

interface Props {
  card: ICard;
}

const GameCardContainer: FC<Props> = ({ card }) => {
  const { firstCard, secondCard, handleCardClick } = useGameManager();
  const isCardFlipped =
    card === firstCard || card === secondCard || Boolean(card.matched);

  return (
    <GameCard
      card={card}
      onCardClick={handleCardClick}
      flipped={isCardFlipped}
    />
  );
};

export default GameCardContainer;
