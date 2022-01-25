const GRID_SIZE_RANGES = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

const GRID_SIZE_CARDS_AMOUNT = {
  [GRID_SIZE_RANGES.sm]: 6,
  [GRID_SIZE_RANGES.md]: 8,
  [GRID_SIZE_RANGES.lg]: 12,
  [GRID_SIZE_RANGES.xl]: 18,
};

const GRID_SIZES_MAP = new Map([
  [GRID_SIZE_RANGES.sm, "3x4"],
  [GRID_SIZE_RANGES.md, "4x4"],
  [GRID_SIZE_RANGES.lg, "6x4"],
  [GRID_SIZE_RANGES.xl, "6x6"],
]);

const CARD_ASSETS_AMOUNT = 36;

export {
  GRID_SIZES_MAP,
  GRID_SIZE_RANGES,
  GRID_SIZE_CARDS_AMOUNT,
  CARD_ASSETS_AMOUNT,
};
