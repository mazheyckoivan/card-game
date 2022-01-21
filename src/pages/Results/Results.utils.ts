import { GRID_SIZES_MAP } from "../../constants/gameSettings";
import { IResult } from "../../shared/interfaces/Result.interface";
import getFormattedTimeFromSeconds from "../../shared/utils/time.utils";

const cookDataSourceFromResults = (results: IResult[]) =>
  results.map((result, index) => ({
    key: `${result.email}${index}`,
    ...result,
    time: getFormattedTimeFromSeconds(result.time),
    difficult: GRID_SIZES_MAP.get(result.difficult),
  }));

export default cookDataSourceFromResults;