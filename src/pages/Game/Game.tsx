import { FC, useEffect } from "react";

import useGameManager from "context/GameManager/useGameManager";

import { ActionButtons, GameGrid, GameStats } from "./components";
import "./styles.css";

const Game: FC = () => {
  const {
    cards,
    firstCard,
    secondCard,
    timeSpent,
    turns,
    restart,
    stopTimer,
    handleCardClick,
  } = useGameManager();

  useEffect(() => {
    restart();

    return () => {
      stopTimer();
    };
  }, [restart, stopTimer]);

  return (
    <div className="game-container">
      <ActionButtons restart={restart} />

      <GameStats timeSpent={timeSpent} turns={turns} />

      <GameGrid
        cards={cards}
        firstCard={firstCard}
        secondCard={secondCard}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default Game;
