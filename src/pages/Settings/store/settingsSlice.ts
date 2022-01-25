import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GridSize, ISettings } from "interfaces";
import { CARD_BACK_IMAGES } from "constants/cardImages";
import { RootState } from "store/store";

const initialState: ISettings = {
  cardBackImageSrc: CARD_BACK_IMAGES[0].src,
  gridSize: "sm",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    setCardBackImageSrc: (state, action: PayloadAction<string>) => {
      state.cardBackImageSrc = action.payload;
    },
    setGridSize: (state, action: PayloadAction<GridSize>) => {
      state.gridSize = action.payload;
    },
  },
});

export const { setCardBackImageSrc, setGridSize } = settingsSlice.actions;

export const selectCardBackImageSrc = (state: RootState) =>
  state.settings.cardBackImageSrc;
export const selectGridSize = (state: RootState) => state.settings.gridSize;

export default settingsSlice.reducer;
