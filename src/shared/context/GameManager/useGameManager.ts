import { useContext } from "react";
import { GameContext } from "./GameManager";
import { IContextValues } from "./GameManager.interfaces";

const useGameManager = (): IContextValues => {
  const context = useContext(GameContext);

  if (!context) throw new Error("useGameManager must be inside a Provider");

  return context;
};

export default useGameManager;
