import { AlertColor } from "@mui/material";

export interface SnackbarMessage {
  message: string;
  key: number;
  variant: AlertColor;
}
