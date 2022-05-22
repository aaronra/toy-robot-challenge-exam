import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import { RobotProps } from "./type";

export const Robot: FC<RobotProps> = ({
  id,
  name,
  onDelete,
  onTurnLeft,
  onTurnRight,
  onMove,
}) => {
  return (
    <Card
      sx={{
        m: 0.5,
      }}
    >
      <CardHeader
        avatar={
          <Avatar>
            <SmartToyIcon color="primary" />
          </Avatar>
        }
        title={`Robot: ${name}`}
      />
      <CardActions>
        <IconButton
          color="secondary"
          onClick={() => {
            if (onTurnLeft) {
              onTurnLeft(id);
            }
          }}
        >
          <TurnLeftIcon />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() => {
            if (onTurnRight) {
              onTurnRight(id);
            }
          }}
        >
          <TurnRightIcon />
        </IconButton>
        <IconButton
          color="success"
          onClick={() => {
            if (onMove) {
              onMove(id);
            }
          }}
        >
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
        <IconButton
          color="warning"
          onClick={() => {
            if (onDelete) {
              onDelete(id);
            }
          }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
