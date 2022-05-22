import { Tile, IRobot, Obstacle } from "../../common/types";

export interface TableProps {
  table: Tile[][];
  robots: IRobot[];
  obstacles: Obstacle[];
}