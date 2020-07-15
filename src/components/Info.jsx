import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Info.css";

const bg = "images/bg-shape.svg";

const useStyles = makeStyles({
  typo: {
    fontSize: "6em",
    color: "#131414",
    lineHeight: "0.8em",
    textAlign: "right",
  },

  sp: {
    color: "#fe4a73",
  },
});

const Info = (props) => {
  const classes = useStyles();
  return (
    <Box component="section">
      <img src={bg} alt="" id="bg" />
      <Typography className={classes.typo}>
        Weather
        <br />
        Me<span className={classes.sp}> Now</span>
      </Typography>
      <hr />
      <Typography>
        A minimal weather app design to brighten up your day.
        <br />
        Designed and developed by Ibrahim Kaiser
      </Typography>
      <Box component="div" className="bottom">
        <Typography>Your weather is currently showing in:</Typography>
        <Box component="div" className="buttons">
          <Box component="div" className="btn">
            {props.tempSymbol === "C" ? (
              <Button variant="contained" className="clicked">
                C
              </Button>
            ) : (
              <Button variant="contained" onClick={props.setTempSymbol}>
                C
              </Button>
            )}
            <p>Celsius</p>
          </Box>
          <Box component="div" className="btn">
            {props.tempSymbol === "F" ? (
              <Button variant="contained" className="clicked">
                F
              </Button>
            ) : (
              <Button variant="contained" onClick={props.setTempSymbol}>
                F
              </Button>
            )}
            <p>Fahrenheit</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
