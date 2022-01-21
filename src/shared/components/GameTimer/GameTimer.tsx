import { FC, memo } from "react";
import { Typography } from "antd";

import useGameManager from "../../context/GameManager/useGameManager";

const { Title } = Typography;

const GameTimer: FC = () => {
  const { timeSpent } = useGameManager();

  return (
    <Title style={{ marginTop: 0 }}>
      Time spent: {new Date(timeSpent * 1000).toISOString().substr(11, 8)}
    </Title>
  );
};

export default memo(GameTimer);
