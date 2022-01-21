import { FC, memo } from "react";

import useGameManager from "../../context/GameManager/useGameManager";

const GameTimer: FC = () => {
  const { timeSpent } = useGameManager();

  return (
    <h1 style={{ alignSelf: "center" }}>
      {new Date(timeSpent * 1000).toISOString().substr(11, 8)}
    </h1>
  );
};

export default memo(GameTimer);
