import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import FavoriteCard from "../components/FavoriteCard";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "4rem",
    width: "100%"
  },
  link: {
    textDecoration: "none",
    margin: "1rem",
    display: "flex",
    flex: "1 1 0",
    maxWidth: "360px",
    minWidth: "300px"
  }
}));

export default function WeatherPage() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.appReducer.favorites);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={Boolean(errorMessage)}
        message={errorMessage}
        action={
          <IconButton color="inherit" size="small" onClick={() => setErrorMessage(null)}>
            <CloseIcon />
          </IconButton>
        }
      />

      <Container className={classes.container}>
        {!favorites.length ? (
          <Typography color="textSecondary">No favorites to display</Typography>
        ) : (
            favorites.map(city => {
              return (
                <Link
                  key={city.id}
                  className={classes.link}
                  to={{
                    pathname: "/",
                    state: {
                      city
                    }
                  }}>
                  <FavoriteCard city={city} setErrorMessage={setErrorMessage} />
                </Link>
              )
            }))}
      </Container>
    </React.Fragment>
  )
}