import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Plots from "./components/Plots";
import Summary from "./components/Summary";
import axios from "axios";
import { Typography } from "@material-ui/core";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [summary, setSummary] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("canada");

  // fetch data
  useEffect(() => {
    // fetch country data to populate autocomplete textbox
    axios.get("https://api.covid19api.com/countries").then((res) => {
      setCountries(res.data);
    });
    // fetch covid data
    axios.get("https://api.covid19api.com/summary").then((res) => {
      setSummary(res.data);
    });
  }, []);

  return (
    <div>
      <Typography variant="h1">Covid-19 Tracker</Typography>
      <Search countries={countries} setSelectedCountry={setSelectedCountry} />
      <Summary selectedCountry={selectedCountry} summary={summary} />
      <Plots />
    </div>
  );
};

export default App;
