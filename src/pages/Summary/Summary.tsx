import { FC } from "react";
import { Button, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { getFormattedTimeFromSeconds } from "utils";
import ROUTES from "constants/routes";
import useGameManager from "context/GameManager/useGameManager";

import "./styles.css";

const { Title } = Typography;

const Summary: FC = () => {
  const navigate = useNavigate();
  const { state }: any = useLocation();

  const { finished } = useGameManager();

  return (
    <div className="summary-screen">
      {finished && (
        <>
          <section className="game-summary">
            <Title>Summary:</Title>

            <Title level={2}>Turns: {state?.turns}</Title>
            <Title level={2}>
              Time Spent: {getFormattedTimeFromSeconds(state?.timeSpent)}
            </Title>
          </section>

          <section className="action-buttons">
            <Button size="large" onClick={() => navigate(ROUTES.settings)}>
              Play another game
            </Button>

            <Button size="large" onClick={() => navigate(ROUTES.results)}>
              Go to top players
            </Button>
          </section>
        </>
      )}

      {!finished && (
        <article className="play-game-first">
          <Title>Play game first</Title>
          <Button
            size="large"
            onClick={() => {
              navigate(ROUTES.settings);
            }}
          >
            Play Game
          </Button>
        </article>
      )}
    </div>
  );
};

export default Summary;
