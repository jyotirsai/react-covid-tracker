import React from "react";
import { Grid } from "@material-ui/core";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const Plots = (props) => {
  let data01 = [{}];
  let data02 = [{}];
  let globalTotalConfirmed = "";
  let globalTotalRecovered = "";
  let globalTotalDeaths = "";
  let totalConfirmed = "";
  let totalRecovered = "";
  let totalDeaths = "";

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

  if (typeof props.summary.Countries !== "undefined") {
    for (var i = 0; i < props.summary.Countries.length; i++) {
      if (props.summary.Countries[i].Country === props.selectedCountry) {
        totalConfirmed = props.summary.Countries[i].TotalConfirmed;
        totalRecovered = props.summary.Countries[i].TotalRecovered;
        totalDeaths = props.summary.Countries[i].TotalDeaths;
      }
    }

    data02 = [
      { name: "Total Confirmed", value: totalConfirmed },
      { name: "Total Recovered", value: totalRecovered },
      { name: "Total Deaths", value: totalDeaths },
    ];
  }

  console.log(data02);

  return (
    <div>
      <Grid container justify="center">
        <PieChart width={400} height={400}>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            data={data02}
            label
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Grid>
    </div>
  );
};

export default Plots;
