import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { animals, uniqueNamesGenerator } from "unique-names-generator";
import { Direction } from "../../common/enums";
import { IRobot } from "../../common/types";
import { RoboFormProps } from "./types";

export const RobotForm: FC<RoboFormProps> = ({ onSave }) => {
  const [values, setValues] = useState<IRobot>({
    id: "0",
    x: 0,
    y: 0,
    facing: Direction.NORTH,
  });

  const handleChange =
    (prop: keyof IRobot) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: Number(event.target.value) });
    };

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...values,
        id: crypto.randomUUID(),
        name: uniqueNamesGenerator({ dictionaries: [animals] }),
      });
    }
  };

  return (
    <Card>
      <CardHeader title="Add Robot" />
      <CardContent>
        <FormControl
          sx={{
            m: 0.5,
          }}
        >
          <TextField
            label="Position X"
            value={values.x}
            onChange={handleChange("x")}
          />
        </FormControl>
        <FormControl
          sx={{
            m: 0.5,
          }}
        >
          <TextField
            label="Position Y"
            value={values.y}
            onChange={handleChange("y")}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button color="primary" startIcon={<SaveIcon />} onClick={handleSave}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};
