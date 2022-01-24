import { FC, useEffect } from "react";

import useGameManager from "context/GameManager/useGameManager";

import { ActionButtons, GameGrid, GameStats } from "./components";
import "./styles.css";

const Game: FC = () => {
  const { restart } = useGameManager();

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className="game-container">
      <ActionButtons />

      <GameStats />

      <GameGrid />
    </div>
  );
};

export default Game;
