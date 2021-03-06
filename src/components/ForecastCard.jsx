import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import getIconImage from "../api/weatherIconMapping";

const useStyles = makeStyles({
  root: {
    maxWidth: "160px",
    minWidth: "112px",
    flex: "1 1 0",
    "&:not(:last-child)": {
      marginRight: "1rem"
    }
  },
  content: {
    textAlign: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  margin: {
    marginRight: "0.5rem"
  }
});

export default function ForecastCard({ icon, day, temperature }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <img src={getIconImage(icon)}></img>

        <Typography gutterBottom component="h6" variant="h6">
          {day.substring(0, 3)}
        </Typography>

        <div className={classes.container}>
          <Typography variant="subtitle1" className={classes.margin}>
            {temperature.Maximum.Value}°
            </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {temperature.Minimum.Value}°
            </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
