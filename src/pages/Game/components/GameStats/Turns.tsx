import { FC, memo } from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface Props {
  turns: number;
}

const Turns: FC<Props> = ({ turns }) => {
  return <Title>Turns: {turns}</Title>;
};

export default memo(Turns);
