import { FC } from "react";

import Turns from "./Turns";
import TimeSpent from "./TimeSpent";

interface Props {
  timeSpent: number;
  turns: number;
}

const GameStats: FC<Props> = ({ timeSpent, turns }) => {
  return (
    <section className="game-stats">
      <Turns turns={turns} />

      <TimeSpent timeSpent={timeSpent} />
    </section>
  );
};

export default GameStats;
