import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const Search = (props) => {
  return (
    <div>
      <Autocomplete
        options={props.countries}
        onChange={(event, value) => props.setSelectedCountry(value.Country)}
        getOptionLabel={(option) => option.Country}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Countries" />
        )}
      />
    </div>
  );
};

export default Search;
