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
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: "5px",
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
    let celsius = parseInt(props.cities.app_temp);
    let fahrenheit = parseInt(celsius * (9 / 5) + 32);
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
          {props.cities.weather && (
            <img
              style={{ height: "40px", width: "50px" }}
              src={`https://www.weatherbit.io/static/img/icons/${props.cities.weather.icon}.png`}
              alt="Icon"
            />
          )}
          <ThemeProvider theme={theme}>
            <Typography align="left" style={{ marginLeft: "4px" }}>
              {props.cities && currentTemp}°
            </Typography>
          </ThemeProvider>
        </Box>
        <Box component="div" style={{ marginRight: "2vw" }}>
          <Typography variant="subtitle2" style={{ fontStyle: "italic" }}>
            {props.cities.weather && props.cities.weather.description}
          </Typography>
        </Box>
      </Card>
      <Box className={classes.imgCard}>
        {props.id === 1 ? (
          <img src={ca} alt="Los Angeles" className={classes.countryImg} />
        ) : (
          <img src={ru} alt="Moscow" className={classes.countryImg} />
        )}
      </Box>
      <Box component="div" className={classes.city}>
        {props.cities && (
          <Box component="div">
            <Typography variant="h6" style={{ color: "white" }}>
              {props.cities.city_name}
            </Typography>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" style={{ color: "white" }}>
                {props.cities.country_code}
              </Typography>
            </ThemeProvider>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Country;
