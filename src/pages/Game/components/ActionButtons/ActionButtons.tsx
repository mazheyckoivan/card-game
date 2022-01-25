import { FC, memo } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import ROUTES from "constants/routes";

interface Props {
  restart(): void;
}

const ActionButtons: FC<Props> = ({ restart }) => {
  const navigate = useNavigate();

  return (
    <section className="action-buttons">
      <Button ghost onClick={restart} size="large" className="restart-button">
        Restart the game
      </Button>

      <Button
        ghost
        onClick={() => navigate(ROUTES.login)}
        size="large"
        className="restart-button"
      >
        Change user
      </Button>

      <Button
        ghost
        onClick={() => navigate(ROUTES.settings)}
        size="large"
        className="restart-button"
      >
        Go to settings tab
      </Button>

      <Button
        ghost
        onClick={() => navigate(ROUTES.results)}
        size="large"
        className="restart-button"
      >
        Check Results
      </Button>
    </section>
  );
};

export default memo(ActionButtons);
