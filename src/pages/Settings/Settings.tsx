import { FC } from "react";
import { Button, Card, Radio, Typography } from "antd";

import { CARD_BACK_IMAGES } from "../../constants/cardImages";
import { GridSize } from "../../shared/interfaces/Settings.interface";
import classNames from "classnames";
import { ICard } from "../../shared/interfaces/Card.interface";

import GRID_SIZE_OPTIONS from "./Settings.constants";

const { Title } = Typography;

interface Props {
  selectedBackImageSrc: string;
  selectedGridSize: GridSize;
  onCardBackImageClick(card: ICard): void;
  onGridSizeChange(gridSize: GridSize): void;
  onLetsPlayButtonClick(): void;
}

const Settings: FC<Props> = ({
  selectedBackImageSrc,
  selectedGridSize,
  onCardBackImageClick,
  onGridSizeChange,
  onLetsPlayButtonClick,
}) => {
  return (
    <div className="settings-screen">
      <Title underline>Choose the settings to play with</Title>

      <section className="back-images">
        <Title level={3}>Choose back side of your cards</Title>

        <div className="back-images-grid">
          {CARD_BACK_IMAGES.map((card) => {
            const cardClassNames = classNames("back-image-card", {
              selected: card.src === selectedBackImageSrc,
            });

            return (
              <Card
                hoverable
                key={card.src}
                className={cardClassNames}
                onClick={() => onCardBackImageClick(card)}
              >
                <img src={card.src} alt="card back" className="back-image" />
              </Card>
            );
          })}
        </div>
      </section>

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
