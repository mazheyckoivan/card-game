import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import GameContextWrapper from "./shared/context/GameManager/GameManager";
import AppLayout from "./shared/layouts/AppLayout";

import AppRouter from "./AppRouter";
import store from "./store/store";

const App: FC = () => (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <GameContextWrapper>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </GameContextWrapper>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
