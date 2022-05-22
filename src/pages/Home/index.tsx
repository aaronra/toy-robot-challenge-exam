import { Alert, Box, Container, Grid, Snackbar } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { DirectionMap } from "../../common/constants";
import { Direction } from "../../common/enums";
import { IRobot, Obstacle } from "../../common/types";
import { Tile } from "../../common/types/tile";
import { SnackbarMessage } from "../../common/types/util";
import { Robot, RobotForm, Table } from "../../components";
import { TableDimension } from "../../components/TableDimension";

export const Home: FC = () => {
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(
    undefined
  );
  const [robots, setRobots] = useState<IRobot[]>([]);
  const [table, setTable] = useState<Tile[][]>();
  const [dimensions, setDimensions] = useState<{
    width: Number;
    height: Number;
  }>({
    width: 5,
    height: 5,
  });
  const obstacles: Obstacle[] = [
    {
      x: 1,
      y: 1,
    },
    {
      x: 3,
      y: 2,
    },
    {
      x: 2,
      y: 1,
    },
    {
      x: 3,
      y: 1,
    },
    {
      x: 5,
      y: 5,
    },
  ];

  useEffect(() => {
    const table = Array.from(Array(dimensions.width), () =>
      Array(dimensions.height)
        .fill(0)
        .map(() => ({
          isRobot: false,
          isObstacle: false,
        }))
    );
    setTable(table);
    setRobots([]);
  }, [dimensions]);

  const handleMove = (id: string) => {
    const robot: any = robots?.find((robot) => robot.id === id);

    let newRobot = { ...robot };

    if (robot) {
      switch (robot.facing) {
        case Direction.NORTH:
          newRobot.x = robot.x - 1;
          break;
        case Direction.NORTHEAST:
          newRobot.x = robot.x - 1;
          newRobot.y = robot.y + 1;
          break;
        case Direction.EAST:
          newRobot.y = robot.y + 1;
          break;
        case Direction.SOUTHEAST:
          newRobot.x = robot.x + 1;
          newRobot.y = robot.y + 1;
          break;
        case Direction.SOUTH:
          newRobot.x = robot.x + 1;
          break;
        case Direction.SOUTHWEST:
          newRobot.x = robot.x + 1;
          newRobot.y = robot.y - 1;
          break;
        case Direction.WEST:
          newRobot.y = robot.y - 1;
          break;
        case Direction.NORTHWEST:
          newRobot.x = robot.x - 1;
          newRobot.y = robot.y - 1;
          break;
      }
      if (checkNewPosition(newRobot)) {
        setRobots([...robots?.filter((robot) => robot.id !== id), newRobot]);
      }
    }
  };

  const handleTurn = (id: string, isClockwise: boolean) => {
    const robot = robots?.find((robot) => robot.id === id);
    if (robot) {
      const directions = DirectionMap.get(robot.facing);
      const newDirection = isClockwise ? directions?.right : directions?.left;
      setRobots([
        ...robots?.filter((robot) => robot.id !== id),
        {
          ...robot,
          facing: newDirection,
        },
      ]);
    }
  };

  const showToast = (message: SnackbarMessage) => {
    setMessageInfo(message);
    setOpen(true);
  };

  const checkNewPosition = (robot: IRobot) => {
    let isValid =
      robot?.x >= 0 &&
      robot?.y >= 0 &&
      robot?.x + 1 <= dimensions.width &&
      robot?.y + 1 <= dimensions.height;

    if (isValid) {
      const slotHasRobot = robots.some(
        (existingRobot) =>
          existingRobot.x === robot.x && existingRobot.y === robot.y
      );
      const slotHasObstacle = obstacles.some(
        (obstacle) => obstacle.x === robot.x && obstacle.y === robot.y
      );
      if (slotHasRobot) {
        showToast({
          message: "blocked by robot",
          key: new Date().getTime(),
          variant: "error",
        });
        isValid = false;
      }
      if (slotHasObstacle) {
        showToast({
          message: "blocked by obstacle",
          key: new Date().getTime(),
          variant: "error",
        });
        isValid = false;
      }
    } else {
      showToast({
        message: "out of bounds",
        key: new Date().getTime(),
        variant: "error",
      });
    }

    return isValid;
  };

  const handleAddRobot = (robot: IRobot) => {
    if (checkNewPosition(robot)) {
      setRobots((prevState) => [
        ...prevState,
        {
          ...robot,
          x: Number(robot.x),
          y: Number(robot.y),
        },
      ]);
    }
  };

  const handleDeleteRobot = (id: string) => {
    setRobots((prevState) => [
      ...prevState?.filter((robot) => robot.id !== id),
    ]);
  };

  return (
    <Container maxWidth="lg">
      <Grid
        sx={{
          width: "100%",
        }}
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={6}>
          <Table table={table} robots={robots} obstacles={obstacles} />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ marginBottom: 1 }}>
            <RobotForm onSave={handleAddRobot} />
          </Box>
          <Box sx={{ marginBottom: 1 }}>
            <TableDimension
              dimensions={dimensions}
              setDimensions={setDimensions}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Grid container>
              {robots
                ?.sort((a, b) => a.id.localeCompare(b.id))
                .map((robot) => (
                  <Grid item key={robot.id}>
                    <Robot
                      id={robot.id}
                      name={robot.name}
                      onTurnRight={(id) => handleTurn(id, true)}
                      onTurnLeft={(id) => handleTurn(id, false)}
                      onMove={handleMove}
                      onDelete={handleDeleteRobot}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={3000}
      >
        <Alert severity={messageInfo?.variant} sx={{ width: "100%" }}>
          {messageInfo?.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
