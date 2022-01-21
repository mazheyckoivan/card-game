import { GRID_SIZES_MAP, GRID_SIZE_RANGES } from "../../constants/gameSettings";

const GRID_SIZE_OPTIONS = [
  {
    label: GRID_SIZES_MAP.get(GRID_SIZE_RANGES.sm),
    value: GRID_SIZE_RANGES.sm,
  },
  {
    label: GRID_SIZES_MAP.get(GRID_SIZE_RANGES.md),
    value: GRID_SIZE_RANGES.md,
  },
  {
    label: GRID_SIZES_MAP.get(GRID_SIZE_RANGES.lg),
    value: GRID_SIZE_RANGES.lg,
  },
  {
    label: GRID_SIZES_MAP.get(GRID_SIZE_RANGES.xl),
    value: GRID_SIZE_RANGES.xl,
  },
];

export default GRID_SIZE_OPTIONS;
