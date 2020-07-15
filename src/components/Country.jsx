import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

const ca = "images/pic-1.jpg";
const ru = "images/pic-2.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  country: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative",
  },
  cardFloat: {
    background: "#fe4a73",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "60%",
    height: "15vh",
    padding: "2px",
    borderRadius: "0 130px 130px 0",
    position: "absolute",
    top: 10,
  },
  cardItems: {
    display: "flex",
    alignItems: "center",
  },
  imgCard: {
    width: "100%",
    height: "70vh",
    top: 0,
  },
  countryImg: {
    height: "100%",
    width: "90%",
    marginLeft: "10px",
    borderRadius: "0 80px",
    boxShadow: "-5px 5px 7px 1px rgba(0, 0, 0, 0.2)",
  },
  city: {
    width: "100%",
    textAlign: "center",
    color: "#e9f2f1",
    marginTop: "10px",
  },
});

const Country = (props) => {
  const classes = useStyles();
  let currentTemp = 0;

  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === "F") {
      currentTemp = fahrenheit;
    } else {
      currentTemp = celsius;
    }
  }

  return (
    <Box className={classes.country}>
      <Card className={classes.cardFloat}>
        <Box component="div" className={classes.cardItems}>
          {props.cities && (
            <img
              src={`http://openweathermap.org/img/w/${props.cities.weather[0].icon}.png`}
              alt="Icon"
            />
          )}
          <ThemeProvider theme={theme}>
            <Typography style={{ marginLeft: "4px" }}>
              {props.cities ? currentTemp : ""}°
            </Typography>
          </ThemeProvider>
        </Box>
        <Typography variant="subtitle2">
          {props.cities ? props.cities.weather[0].main.toUpperCase() : ""}
        </Typography>
      </Card>
      <Box className={classes.imgCard}>
        {props.cities && props.cities.name === "Dhaka" ? (
          <img src={ca} alt="Los Angeles" className={classes.countryImg} />
        ) : (
          <img src={ru} alt="Moscow" className={classes.countryImg} />
        )}
      </Box>
      <Box component="div" className={classes.city}>
        {props.cities && (
          <Box component="div">
            <Typography>{props.cities.name}</Typography>
            <ThemeProvider theme={theme}>
              <Typography>{props.cities.sys.country}</Typography>
            </ThemeProvider>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Country;