import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { ICard, GridSize } from "interfaces";
import ROUTES from "constants/routes";
import { useAppDispatch } from "store/hooks";

import { setCardBackImageSrc, setGridSize } from "./store/settingsSlice";

import Settings from "./Settings";
import "./styles.css";

const SettingsContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCardBackImageChange = useCallback(
    (card: ICard) => {
      dispatch(setCardBackImageSrc(card.src));
    },
    [dispatch]
  );

  const handleGridSizeChange = useCallback(
    (value: GridSize) => {
      dispatch(setGridSize(value));
    },
    [dispatch]
  );

  const handleLetsPlayButton = useCallback(() => {
    navigate(ROUTES.game);
  }, [navigate]);

  return (
    <Settings
      onCardBackImageClick={handleCardBackImageChange}
      onGridSizeChange={handleGridSizeChange}
      onLetsPlayButtonClick={handleLetsPlayButton}
    />
  );
};

export default SettingsContainer;
