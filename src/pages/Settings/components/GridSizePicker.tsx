import { FC, memo } from "react";
import { Radio, Typography } from "antd";

import { GridSize } from "../../../interfaces/Settings.interface";
import { useAppSelector } from "../../../store/hooks";

import GRID_SIZE_OPTIONS from "../Settings.constants";

const { Title } = Typography;

interface Props {
  onGridSizeChange(gridSize: GridSize): void;
}

const GridSizePicker: FC<Props> = ({ onGridSizeChange }) => {
  const selectedGridSize = useAppSelector((state) => state.settings.gridSize);

  return (
    <section className="grid-size">
      <Title level={3}>Choose grid size</Title>

      <Radio.Group
        options={GRID_SIZE_OPTIONS}
        value={selectedGridSize}
        onChange={(e) => onGridSizeChange(e.target.value)}
        size="large"
        optionType="button"
        buttonStyle="solid"
      />
    </section>
  );
};

export default memo(GridSizePicker);
