import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import "./styles.css";

const { Title, Paragraph } = Typography;

const Welcome: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <Title underline className="title">
        Welcome to the memory game!
      </Title>

      <Title level={3} className="subtitle">
        Rules
      </Title>

      <Paragraph className="text">
        Dead simple rules: just click on two tiles to find two matching images.
        Game ends when all desk will be opened
      </Paragraph>

      <Title level={3} className="subtitle">
        Memory
      </Title>

      <Paragraph className="text">
        Memory has long been a favorite game for all generations. It is easy to
        play, in fact it is so simple that really young children can play with
        ease. It requires observation, concentration and a good memory to win.
        The game is also known as Concentration, Pelmanism, Shinkei-suijaku,
        Pexeso and Pairs. Object of the Game The object of the game is to
        collect the most matching pairs.
      </Paragraph>

      <Button
        ghost
        size="large"
        className="button"
        onClick={() => {
          navigate("login");
        }}
      >
        LET'S GO
      </Button>
    </div>
  );
};

export default Welcome;
