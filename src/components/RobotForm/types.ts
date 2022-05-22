import { IRobot } from "../../common/types";

export interface RoboFormProps {
  onSave?: (values: IRobot) => void;
}
