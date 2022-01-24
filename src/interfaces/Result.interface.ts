import { GridSize } from "./Settings.interface";

interface IResult {
  firstName: string;
  secondName: string;
  email: string;
  turns: number;
  time: number;
  difficult: GridSize;
}

export type { IResult };
