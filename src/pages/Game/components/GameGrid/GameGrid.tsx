import { FC, memo } from "react";
import classNames from "classnames";

import useGameManager from "context/GameManager/useGameManager";
import { useAppSelector } from "store/hooks";

import GameCard from "../GameCard";

interface Props {}

const GameGrid: FC<Props> = () => {
  const { cards } = useGameManager();

  const gridSize = useAppSelector((state) => state.settings.gridSize);

  const gridClassnames = classNames("card-grid", {
    [`${gridSize}`]: gridSize,
  });

  return (
    <section className={gridClassnames}>
      {cards.map((card) => (
        <GameCard key={card.id} card={card} />
      ))}
    </section>
  );
};

export default memo(GameGrid);
