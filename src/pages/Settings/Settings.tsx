import { FC } from "react";
import { Button, Card, Radio, Typography } from "antd";

import { CARD_BACK_IMAGES } from "../../constants/cardImages";
import { ISettings } from "../../shared/interfaces/Settings.interface";

const { Title } = Typography;

interface Props {
  onSettingsSubmit(values: ISettings): void;
}

const Settings: FC<Props> = ({ onSettingsSubmit }) => {
  return (
    <div className="settings-screen">
      <Title underline>Choose the settings to play with</Title>

      <section className="back-images">
        <Title level={3}>Choose back side of your cards</Title>
        <div className="back-images-grid">
          {CARD_BACK_IMAGES.map((card) => {
            return (
              <Card hoverable className="back-image-card">
                <img
                  key={card.src}
                  src={card.src}
                  alt="card back"
                  className="back-image"
                />
              </Card>
            );
          })}
        </div>
      </section>

      <section className="grid-size">
        <Title level={3}>Choose grid size</Title>

        <Radio.Group
          options={[
            { label: "3x4", value: "sm" },
            { label: "4x4", value: "md" },
            { label: "6x4", value: "lg" },
            { label: "6x6", value: "xl" },
          ]}
          size="large"
          optionType="button"
          buttonStyle="solid"
        />
      </section>

      <Button ghost htmlType="submit" className="submit-settings-button">
        SUBMIT SETTINGS
      </Button>
    </div>
  );
};

export default Settings;
