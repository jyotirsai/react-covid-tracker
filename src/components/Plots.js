import React from "react";
import { Grid } from "@material-ui/core";
import { PieChart, Pie, Tooltip } from "recharts";

const Plots = (props) => {
  console.log(props.summary);
  let data01 = [{}];
  let data02 = [{}];
  let globalTotalConfirmed = "";
  let globalTotalRecovered = "";
  let globalTotalDeaths = "";

  if (typeof props.summary.Global !== "undefined") {
    globalTotalConfirmed = props.summary.Global.TotalConfirmed;
    globalTotalDeaths = props.summary.Global.TotalDeaths;
    globalTotalRecovered = props.summary.Global.TotalRecovered;

    data01 = [
      { name: "TotalConfirmed:", value: globalTotalConfirmed },
      { name: "TotalRecovered:", value: globalTotalRecovered },
      { name: "TotalDeaths:", value: globalTotalDeaths },
    ];

    data02 = [
      { name: "TotalConfirmed:", value: "Total Confirmed" },
      { name: "TotalRecovered:", value: "Total Recovered" },
      { name: "TotalDeaths:", value: "Total Deaths" },
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
        />
        <Pie
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          data={data02}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Plots;
