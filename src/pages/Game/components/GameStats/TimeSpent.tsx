import { FC } from "react";
import { Typography } from "antd";

import { getFormattedTimeFromSeconds } from "utils";

const { Title } = Typography;

interface Props {
  timeSpent: number;
}

const TimeSpent: FC<Props> = ({ timeSpent }) => {
  return (
    <Title style={{ marginTop: 0 }}>
      Time spent: {getFormattedTimeFromSeconds(timeSpent)}
    </Title>
  );
};

export default TimeSpent;
