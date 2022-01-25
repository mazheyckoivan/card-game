import { IResult } from "interfaces";

const cookDataSourceFromResults = (results: IResult[]) =>
  results.map((result, index) => ({
    key: `${result.email}${index}`,
    ...result,
  }));

export default cookDataSourceFromResults;
