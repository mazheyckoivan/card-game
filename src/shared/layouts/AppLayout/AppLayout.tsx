import { FC, ReactNode } from "react";
import { Button, Card } from "antd";

import useGameManager from "../../context/GameManager/useGameManager";

import "./styles.css";

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  const { restart } = useGameManager();

  return (
    <div className="app-layout">
      <Card
        extra={
          <Button type="primary" onClick={restart}>
            Restart game
          </Button>
        }
        className="app-content"
      >
        {children}
      </Card>
    </div>
  );
};

export default AppLayout;
