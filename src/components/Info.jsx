import React from "react";
import { Box, Typography, Button, Link } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import "./Info.css";

const bg = "images/bg-shape.svg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "5vh",
  },
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  typo: {
    fontSize: "6em",
    color: "#131414",
    lineHeight: "0.8em",
    textAlign: "right",
  },

  sp: {
    color: "#fe4a73",
  },
  clicked: {
    fontWeight: "bold",
    fontSize: "2em",
    border: "none",
    borderRadius: "15px",
    background: "#fe4a73",
    cursor: "pointer",
    padding: "0.3rem 0.2rem",
    color: "#e9f2f1",
    height: "40px",
    outline: "none",
    "&:hover": {
      background: "#fe4a73",
    },
  },
  unclicked: {
    fontWeight: "bold",
    fontSize: "2em",
    border: "none",
    height: "40px",
    padding: "0.3rem 0.2rem",
    borderRadius: "15px",
    background: "#e9f2f1",
    cursor: "pointer",
    color: "#fe4a73",
    "&:hover": {
      background: "#e9f2f1",
    },
  },
});

const Info = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.section}>
      <img src={bg} alt="" className={classes.bg} />
      <ThemeProvider theme={theme}>
        <Typography variant="h1" style={{ color: "white" }}>
          Weather
          <br />
          Me<span className={classes.sp}> Now</span>
        </Typography>
      </ThemeProvider>
      <hr />
      <Typography variant="subtitle1" style={{ color: "white" }}>
        A minimal weather app design to brighten up your day.
        <br />
        Designed and developed by{" "}
        <span style={{ fontStyle: "italic" }}>Ibrahim Kaiser</span>
        <br />
        <span style={{ color: "#fe4a73" }}>Frontend -</span> React, Material-UI
        <br />
        <span style={{ color: "#fe4a73" }}>API -</span>{" "}
        <Link href="https://www.weatherbit.io/">
          https://www.weatherbit.io/
        </Link>
      </Typography>
      <Box component="div" className="bottom">
        <Typography variant="body1">
          Your weather is currently showing in:
        </Typography>
        <Box component="div" className="user-options">
          <Box component="div" className="user-btn">
            {props.tempSymbol === "C" ? (
              <Button variant="contained" className={classes.clicked}>
                C
              </Button>
            ) : (
              <Button
                variant="contained"
                className={classes.unclicked}
                onClick={props.setTempSymbol}
              >
                C
              </Button>
            )}
            <Typography>Celsius</Typography>
          </Box>
          <Box component="div" className="user-btn">
            {props.tempSymbol === "F" ? (
              <Button
                size="small"
                variant="contained"
                className={classes.clicked}
              >
                F
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                className={classes.unclicked}
                onClick={props.setTempSymbol}
              >
                F
              </Button>
            )}
            <Typography>Farenheit</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
