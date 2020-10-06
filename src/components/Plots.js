import React from "react";
import { Grid } from "@material-ui/core";
import { PieChart, Pie, Tooltip } from "recharts";

const Plots = (props) => {
  console.log(props.summary);
  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Plots;
