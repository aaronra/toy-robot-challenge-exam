export interface RobotProps {
  id?: string;
  name?: string;
  onDelete?: (id?: string) => void;
  onTurnLeft?: (id?: string) => void;
  onTurnRight?: (id?: string) => void;
  onMove?: (id?: string) => void;
}
