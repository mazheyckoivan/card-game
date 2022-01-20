import { FC } from "react";

import { GameCard } from "../../shared/components";
import useGameManager from "../../shared/context/GameManager/useGameManager";

import "./styles.css";

const Game: FC = () => {
  const { cards } = useGameManager();

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <GameCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Game;
