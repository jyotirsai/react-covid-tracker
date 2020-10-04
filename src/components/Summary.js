import React from "react";
import { Typography, Grid, Paper, Card } from "@material-ui/core";

const Summary = (props) => {
  // initialize data
  let totalConfirmed = "";
  let totalRecovered = "";
  let totalDeaths = "";

  // Check if data is undefined, if not proceed to find data associated with Country
  if (typeof props.summary.Countries !== "undefined") {
    for (var i = 0; i < props.summary.Countries.length; i++) {
      if (props.summary.Countries[i].Country === props.selectedCountry) {
        totalConfirmed = props.summary.Countries[i].TotalConfirmed;
        totalRecovered = props.summary.Countries[i].TotalRecovered;
        totalDeaths = props.summary.Countries[i].TotalDeaths;
      }
    }
  } else {
    console.log("loading");
  }
  return (
    <div>
      <Paper>
        <Typography variant="h4">Summary</Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Card>
              <Typography variant="h6">Worldwide</Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <Typography variant="h6">
                Country: {props.selectedCountry}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                Total Confirmed Cases: {totalConfirmed}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                Total Recovered Cases: {totalRecovered}
              </Typography>
              <Typography variant="subtitle1">
                {" "}
                Total Deaths: {totalDeaths}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Summary;
