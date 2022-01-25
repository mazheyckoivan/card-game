import { FC } from "react";
import { Button, Table, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import ROUTES from "constants/routes";

import cookDataSourceFromResults from "./Results.utils";
import RESULTS_COLUMNS from "./Result.constants";

const { Title } = Typography;

const Results: FC = () => {
  const navigate = useNavigate();

  const rawResults = localStorage.getItem("results");

  const results = rawResults
    ? cookDataSourceFromResults(JSON.parse(rawResults))
    : null;

  return (
    <div className="results-screen">
      <Title level={2} style={{ textAlign: "center" }}>
        Results table
      </Title>

      {results && <Table dataSource={results} columns={RESULTS_COLUMNS} />}

      {!results && (
        <Title level={1} style={{ textAlign: "center", marginTop: 0 }}>
          Play atleast one game to the results
        </Title>
      )}

      <div className="action-buttons">
        <Button
          ghost
          onClick={() => navigate(ROUTES.welcome)}
          size="large"
          className="restart-button"
        >
          Check Rules
        </Button>

        <Button
          ghost
          onClick={() => navigate(ROUTES.login)}
          size="large"
          className="restart-button"
        >
          Change User
        </Button>

        <Button
          ghost
          onClick={() => navigate(ROUTES.settings)}
          size="large"
          className="restart-button"
        >
          Start new Game
        </Button>
      </div>
    </div>
  );
};

export default Results;
