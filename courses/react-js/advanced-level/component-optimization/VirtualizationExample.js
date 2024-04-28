import React from "react";
import { FixedSizeList } from "react-window";
const VirtualizationExample = () => {
  const Row = ({ index, style }) => <div style={style}>Row {index}</div>;
  return (
    <FixedSizeList height={300} width="auto" itemSize={50} itemCount={50}>
      {Row}
    </FixedSizeList>
  );
};
export default VirtualizationExample;
