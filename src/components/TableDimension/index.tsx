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
import { TableDimensionProps } from "./types";

export const TableDimension: FC<TableDimensionProps> = ({
  dimensions,
  setDimensions,
}) => {
  const [values, setValues] = useState(dimensions);

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: Number(event.target.value) });
    };

  const handleSave = () => {
    setDimensions(values);
  };

  return (
    <Card>
      <CardHeader title="Update Table Dimension" />
      <CardContent>
        <FormControl
          sx={{
            m: 0.5,
          }}
        >
          <TextField
            label="Width"
            value={values.width}
            type="number"
            onChange={handleChange("width")}
          />
        </FormControl>
        <FormControl
          sx={{
            m: 0.5,
          }}
        >
          <TextField
            label="Height"
            type="number"
            value={values.height}
            onChange={handleChange("height")}
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
