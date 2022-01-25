import { FC, memo } from "react";
import classNames from "classnames";

import { ICard } from "interfaces";
import { useAppSelector } from "store/hooks";

import GameCard from "../GameCard";

interface Props {
  cards: ICard[];
  firstCard: ICard | null;
  secondCard: ICard | null;
  onCardClick(card: ICard): void;
}

const GameGrid: FC<Props> = ({ cards, firstCard, secondCard, onCardClick }) => {
  const gridSize = useAppSelector((state) => state.settings.gridSize);

  const gridClassnames = classNames("card-grid", {
    [`${gridSize}`]: gridSize,
  });

  return (
    <section className={gridClassnames}>
      {cards.map((card) => {
        const flipped =
          card === firstCard || card === secondCard || Boolean(card.matched);

        return (
          <GameCard
            key={card.id}
            card={card}
            flipped={flipped}
            onCardClick={onCardClick}
          />
        );
      })}
    </section>
  );
};

export default memo(GameGrid);
