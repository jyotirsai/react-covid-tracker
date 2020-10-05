import React from "react";
import { Typography, Grid, Paper, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Moment from "react-moment";

// styles
const useStyles = makeStyles({
  cardStyles: {
    padding: 10,
    marginTop: 10,
  },
  paperStyles: {
    padding: 20,
    marginTop: 10,
  },
});

const Summary = (props) => {
  // initialize styles
  const classes = useStyles();

  // initialize data
  let totalConfirmed = "";
  let totalRecovered = "";
  let totalDeaths = "";
  let globalTotalConfirmed = "";
  let globalTotalRecovered = "";
  let globalTotalDeaths = "";
  let date = "";
  let globalNewCases = "";
  let totalNewCases = "";
  let totalNewDeaths = "";
  let globalNewDeaths = "";

  // Check if data is undefined, if not proceed to find data associated with Country
  if (typeof props.summary.Countries !== "undefined") {
    for (var i = 0; i < props.summary.Countries.length; i++) {
      if (props.summary.Countries[i].Country === props.selectedCountry) {
        totalConfirmed = props.summary.Countries[i].TotalConfirmed;
        totalRecovered = props.summary.Countries[i].TotalRecovered;
        totalDeaths = props.summary.Countries[i].TotalDeaths;
        date = props.summary.Countries[i].Date;
        totalNewCases = props.summary.Countries[i].NewConfirmed;
        totalNewDeaths = props.summary.Countries[i].NewDeaths;
      }
    }
  } else {
    console.log("loading");
  }

  // Return global data
  if (typeof props.summary.Global !== "undefined") {
    globalTotalConfirmed = props.summary.Global.TotalConfirmed;
    globalTotalDeaths = props.summary.Global.TotalDeaths;
    globalTotalRecovered = props.summary.Global.TotalRecovered;
    globalNewCases = props.summary.Global.NewConfirmed;
    globalNewDeaths = props.summary.Global.NewDeaths;
  } else {
    console.log("loading");
  }

  return (
    <div>
      <Paper className={classes.paperStyles}>
        <Typography variant="h4">Summary</Typography>
        <Grid container spacing={2} justify="center" align="center">
          <Grid item>
            <Card className={classes.cardStyles}>
              <Typography variant="h6">Worldwide</Typography>
              <Typography variant="subtitle1">
                Total Confirmed Cases: {globalTotalConfirmed}
              </Typography>
              <Typography variant="subtitle1">
                Total Recovered Cases: {globalTotalRecovered}
              </Typography>
              <Typography variant="subtitle1">
                Total Confirmed Deaths: {globalTotalDeaths}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.cardStyles}>
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
                Total Confirmed Deaths: {totalDeaths}
              </Typography>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.cardStyles}>
              <Typography variant="h6">
                As of <Moment format="MMMM Do, YYYY:">{date}</Moment>
              </Typography>
              <Typography variant="body2">
                {" "}
                There has been {totalNewCases} new cases in <br />{" "}
                {props.selectedCountry} compared to {globalNewCases} worldwide.
              </Typography>
              <Typography variant="body2">
                {totalNewDeaths} new deaths were reported in{" "}
                {props.selectedCountry} <br /> compared to {globalNewDeaths} new
                deaths worldwide.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Summary;
