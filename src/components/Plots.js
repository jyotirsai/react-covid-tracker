import React from "react";
import {
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Plots = (props) => {
  let array = [];

  Object.entries(props.confirmedData).forEach((entry) => {
    let [key, value] = entry;
    let obj = { Cases: value["Cases"], Date: key };
    array.push(obj);
  });

  console.log(array);

  return (
    <div>
      <AreaChart width={700} height={400} data={array}>
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Cases" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Plots;
