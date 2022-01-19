import { FC } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Route path="/" element={<Welcome />} />
      <Route path="login" element={<Login />} />
      <Route path="game" element={<Game />} />
      <Route path="game-settings" element={<Settings />} />
      <Route path="game-summary" element={<Summary />} />
      <Route path="results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
