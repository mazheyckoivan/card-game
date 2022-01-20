import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import GameContextWrapper from "./shared/context/GameManager/GameManager";
import AppLayout from "./shared/layouts/AppLayout";

const App: FC = () => (
  <BrowserRouter>
    <GameContextWrapper>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </GameContextWrapper>
  </BrowserRouter>
);

export default App;
