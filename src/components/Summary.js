import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";

const Summary = (props) => {
  return (
    <div>
      <Typography variant="h4">Summary</Typography>
      <Grid container spacing={3}>
        <Grid item>
          <Paper>
            <Typography variant="h6">Worldwide</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Typography variant="h6">
              Country: {props.selectedCountry}
            </Typography>
            {typeof props.summary.Countries !== "undefined"
              ? props.summary.Countries[0].TotalConfirmed
              : null}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Summary;
