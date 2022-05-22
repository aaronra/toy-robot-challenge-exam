import { Direction } from "../enums";
import NorthIcon from "@mui/icons-material/North";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import SouthIcon from "@mui/icons-material/South";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

export const DirectionMap = new Map([
  [Direction.NORTH, { left: Direction.NORTHWEST, right: Direction.NORTHEAST }],
  [Direction.NORTHEAST, { left: Direction.NORTH, right: Direction.EAST }],
  [Direction.EAST, { left: Direction.NORTHEAST, right: Direction.SOUTHEAST }],
  [Direction.SOUTHEAST, { left: Direction.EAST, right: Direction.SOUTH }],
  [Direction.SOUTH, { left: Direction.SOUTHEAST, right: Direction.SOUTHWEST }],
  [Direction.SOUTHWEST, { left: Direction.SOUTH, right: Direction.WEST }],
  [Direction.WEST, { left: Direction.SOUTHWEST, right: Direction.NORTHWEST }],
  [Direction.NORTHWEST, { left: Direction.WEST, right: Direction.NORTH }],
]);

export const DirectionIconMap = new Map([
  [Direction.NORTH, <NorthIcon />],
  [Direction.NORTHEAST, <NorthEastIcon />],
  [Direction.EAST, <EastIcon />],
  [Direction.SOUTHEAST, <SouthEastIcon />],
  [Direction.SOUTH, <SouthIcon />],
  [Direction.SOUTHWEST, <SouthWestIcon />],
  [Direction.WEST, <WestIcon />],
  [Direction.NORTHWEST, <NorthWestIcon />],
]);
