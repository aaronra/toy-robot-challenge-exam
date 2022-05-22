import { Direction } from "../enums";

export interface IRobot {
  id?: string;
  x?: number | null;
  y?: number | null;
  facing?: Direction | null;
  name?: string;
}
