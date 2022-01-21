import { FC, useEffect } from "react";
import { Button } from "antd";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { GameCard, GameTimer } from "../../shared/components";
import useGameManager from "../../shared/context/GameManager/useGameManager";
import { useAppSelector } from "../../store/hooks";

import "./styles.css";

const Game: FC = () => {
  const navigate = useNavigate();
  const { cards, restart } = useGameManager();

  const gridSize = useAppSelector((state) => state.settings.gridSize);
  const gridClassnames = classNames("card-grid", {
    [`${gridSize}`]: gridSize,
  });

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className="game-container">
      <div className="action-buttons">
        <Button ghost onClick={restart} size="large" className="restart-button">
          Restart the game
        </Button>

        <Button
          ghost
          onClick={() => navigate("/login")}
          size="large"
          className="restart-button"
        >
          Change user
        </Button>

        <Button
          ghost
          onClick={() => navigate("/game-settings")}
          size="large"
          className="restart-button"
        >
          Go to settings tab
        </Button>
      </div>

      <GameTimer />

      <div className={gridClassnames}>
        {cards.map((card) => (
          <GameCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Game;
