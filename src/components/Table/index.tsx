import { Grid, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { FC } from "react";
import { DirectionIconMap } from "../../common/constants";
import { TableProps } from "./types";

export const Table: FC<TableProps> = ({ table, robots, obstacles }) => {
  return (
    <div>
      {table?.map((row, rowIndex) => (
        <Grid container key={rowIndex}>
          {row.map((col, colIndex) => {
            const robot = robots?.find(
              (robot) => robot.x === rowIndex && robot.y === colIndex
            );
            return (
              <Grid
                key={colIndex}
                item
                style={{
                  width: "5rem",
                  height: "5rem",
                  border: "0.1rem solid white",
                  ...(obstacles?.some(
                    (obstacle) =>
                      obstacle.x === rowIndex && obstacle.y === colIndex
                  ) && {
                    backgroundColor: "white",
                  }),
                }}
              >
                <Typography>
                  ({rowIndex},{colIndex})
                </Typography>
                {robot && (
                  <>
                    <SmartToyIcon color="warning" />
                    {robot.facing && DirectionIconMap.get(robot.facing)}
                    <Typography fontSize="1rem">{robot.name}</Typography>
                  </>
                )}
              </Grid>
            );
          })}
        </Grid>
      ))}
    </div>
  );
};
