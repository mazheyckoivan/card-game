import { FC, memo } from "react";
import { Typography } from "antd";

import useGameManager from "../../context/GameManager/useGameManager";
import getFormattedTimeFromSeconds from "../../utils/time.utils";

const { Title } = Typography;

const GameTimer: FC = () => {
  const { timeSpent } = useGameManager();

  return (
    <Title style={{ marginTop: 0 }}>
      Time spent: {getFormattedTimeFromSeconds(timeSpent)}
    </Title>
  );
};

export default memo(GameTimer);
