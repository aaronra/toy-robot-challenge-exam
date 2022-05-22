export interface TableDimensionProps {
  dimensions: {
    width: Number;
    height: Number;
  };
  setDimensions: (values: { width: Number; height: Number }) => void;
}
