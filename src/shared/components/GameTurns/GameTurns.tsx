import { Typography } from "antd";
import { FC } from "react";

import useGameManager from "../../context/GameManager/useGameManager";

const { Title } = Typography;

const GameTurns: FC = () => {
  const { turns } = useGameManager();

  return <Title>Turns: {turns}</Title>;
};

export default GameTurns;
