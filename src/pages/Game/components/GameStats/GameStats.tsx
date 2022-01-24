import { FC } from "react";
import { Typography } from "antd";

import { getFormattedTimeFromSeconds } from "utils";

import useGameManager from "context/GameManager/useGameManager";

const { Title } = Typography;

interface Props {}

const GameStats: FC<Props> = () => {
  const { turns, timeSpent } = useGameManager();

  return (
    <section className="game-stats">
      <Title>Turns: {turns}</Title>
      <Title style={{ marginTop: 0 }}>
        Time spent: {getFormattedTimeFromSeconds(timeSpent)}
      </Title>
    </section>
  );
};

export default GameStats;
