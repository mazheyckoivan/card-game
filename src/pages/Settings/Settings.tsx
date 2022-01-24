import { FC } from "react";
import { Button, Typography } from "antd";

import { GridSize, ICard } from "interfaces";

import BackImages from "./components/BackImages";
import GridSizePicker from "./components/GridSizePicker";

const { Title } = Typography;

interface Props {
  onCardBackImageClick(card: ICard): void;
  onGridSizeChange(gridSize: GridSize): void;
  onLetsPlayButtonClick(): void;
}

const Settings: FC<Props> = ({
  onCardBackImageClick,
  onGridSizeChange,
  onLetsPlayButtonClick,
}) => {
  return (
    <div className="settings-screen">
      <Title underline>Choose the settings to play with</Title>

      <BackImages onCardBackImageClick={onCardBackImageClick} />

      <GridSizePicker onGridSizeChange={onGridSizeChange} />

      <Button
        ghost
        onClick={onLetsPlayButtonClick}
        className="lets-play-button"
      >
        LET'S PLAY
      </Button>
    </div>
  );
};

export default Settings;
