import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../constants/routes";
import { ICard } from "../../shared/interfaces/Card.interface";
import { GridSize } from "../../shared/interfaces/Settings.interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setCardBackImageSrc,
  setGridSize,
} from "../../store/slices/settingsSlice";

import Settings from "./Settings";
import "./styles.css";

const SettingsContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedBackImageSrc = useAppSelector(
    (state) => state.settings.cardBackImageSrc
  );
  const selectedGridSize = useAppSelector((state) => state.settings.gridSize);

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
      selectedBackImageSrc={selectedBackImageSrc}
      selectedGridSize={selectedGridSize}
      onCardBackImageClick={handleCardBackImageChange}
      onGridSizeChange={handleGridSizeChange}
      onLetsPlayButtonClick={handleLetsPlayButton}
    />
  );
};

export default SettingsContainer;
