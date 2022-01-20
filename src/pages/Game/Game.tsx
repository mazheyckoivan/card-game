import { FC } from "react";
import { Button } from "antd";

import { GameCard } from "../../shared/components";
import useGameManager from "../../shared/context/GameManager/useGameManager";

import "./styles.css";

const Game: FC = () => {
  const { cards, restart } = useGameManager();

  return (
    <div className="game-container">
      <Button ghost onClick={restart} size="large" className="restart-button">
        Restart the game
      </Button>

      <div className="card-grid">
        {cards.map((card) => (
          <GameCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Game;
