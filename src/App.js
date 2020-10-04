import React from "react";
import Search from "./components/Search";
import Plots from "./components/Plots";
import Summary from "./components/Summary";

const App = () => {
  return (
    <div>
      <h1>Canada Covid</h1>
      <Search />
      <Summary />
      <Plots />
    </div>
  );
};

export default App;
