import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import * as api from "../api/api";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    margin: "4rem 0"
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    pointerEvents: "none",
    marginBottom: "8px"
  },
  inputContainer: {
    width: "320px"
  }
}));

export default function SearchBar({ currentCity, setCurrentCity, setErrorMessage }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let debouncer = setTimeout(() => {
      if (value) {
        callSearch();
      }
    }, 1000);
    return () => {
      clearTimeout(debouncer);
    }
  }, [value]);

  async function callSearch() {
    try {
      const response = await api.fetchAutoCompleteSearch(value);
      const options = response.map(result => {
        return ({
          name: `${result.LocalizedName}, ${result.Country.LocalizedName}`,
          id: result.Key
        })
      });
      setResults(options);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <div className={classes.inputContainer}>
        <Autocomplete
          disableClearable
          options={results.map((option) => option.name)}
          value={currentCity.name}
          onChange={(event, value) => {
            if (value) {
              const city = results.find(result => result.name === value);
              if (city) {
                setCurrentCity(city);
              }
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              margin="normal"
              variant="standard"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    </div>
  )
}