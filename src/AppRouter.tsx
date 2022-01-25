import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import ROUTES from "./constants/routes";
import {
  Game,
  Login,
  NotFound,
  Results,
  Settings,
  Summary,
  Welcome,
} from "./pages";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.welcome} element={<Welcome />} />
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.game} element={<Game />} />
      <Route path={ROUTES.settings} element={<Settings />} />
      <Route path={ROUTES.summary} element={<Summary />} />
      <Route path={ROUTES.results} element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
