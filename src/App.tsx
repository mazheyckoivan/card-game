import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AppLayout from "./shared/layouts/AppLayout";

const App: FC = () => (
  <BrowserRouter>
    <AppLayout>
      <AppRouter />
    </AppLayout>
  </BrowserRouter>
);

export default App;
