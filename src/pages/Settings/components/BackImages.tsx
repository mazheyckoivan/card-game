import { FC, memo } from "react";
import { Card, Typography } from "antd";
import classNames from "classnames";

import { useAppSelector } from "../../../store/hooks";
import { CARD_BACK_IMAGES } from "../../../constants/cardImages";
import { ICard } from "../../../interfaces/Card.interface";

const { Title } = Typography;

interface Props {
  onCardBackImageClick(card: ICard): void;
}

const BackImages: FC<Props> = ({ onCardBackImageClick }) => {
  const selectedBackImageSrc = useAppSelector(
    (state) => state.settings.cardBackImageSrc
  );

  return (
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
  );
};

export default memo(BackImages);
