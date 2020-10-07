import React from "react";
import { Grid } from "@material-ui/core";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Plots = (props) => {
  console.log(props.summary);
  let data01 = [{}];
  let globalTotalConfirmed = "";
  let globalTotalRecovered = "";
  let globalTotalDeaths = "";

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  if (typeof props.summary.Global !== "undefined") {
    globalTotalConfirmed = props.summary.Global.TotalConfirmed;
    globalTotalDeaths = props.summary.Global.TotalDeaths;
    globalTotalRecovered = props.summary.Global.TotalRecovered;

    data01 = [
      { name: "Total Confirmed", value: globalTotalConfirmed },
      { name: "Total Recovered", value: globalTotalRecovered },
      { name: "Total Deaths", value: globalTotalDeaths },
    ];
  } else {
    console.log("loading");
  }

  return (
    <div>
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          data={data01}
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Plots;
