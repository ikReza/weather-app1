import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, CircularProgress } from "@material-ui/core";
import "./App.css";
import Info from "./components/Info";
import Country from "./components/Country";

function App() {
  const [cities1, setCities1] = useState([]);
  const [cities2, setCities2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [latitude, setLatitude] = useState(23.777176);
  const [longitude, setLongitude] = useState(90.399452);
  const id = [1, 2];
  let [tempSymbol, setTempSymbol] = useState("F");

  useEffect(() => {
    setLoading1(true);
    axios
      .get(
        "https://api.weatherbit.io/v2.0/current?city_id=1185241&key=5cdcbe91365c41e68d36eb79f1ca1c21"
      )
      .then((res) => {
        setLoading1(false);
        setCities1(res.data.data[0]);
      })
      .catch((err) => console.log({ message: err }));
  }, []);

  useEffect(() => {
    setLoading2(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        console.log(latitude, longitude);
      });

      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=5cdcbe91365c41e68d36eb79f1ca1c21`
        )
        .then((res) => {
          setLoading2(false);
          setCities2(res.data.data[0]);
        })
        .catch((err) => console.log({ message: err }));
    } else {
      console.log("not supported");
    }
  }, [latitude, longitude]);

  return (
    <Box component="main">
      <Grid container justify="center" spacing={2} style={{ height: "80vh" }}>
        <Grid item xs={9} sm={5} md={5}>
          <Info
            tempSymbol={tempSymbol}
            setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
          />
        </Grid>
        <Grid item xs={8} sm={3} md={3}>
          {!loading1 ? (
            <Country tempSymbol={tempSymbol} cities={cities1} id={id[0]} />
          ) : (
            <Box
              component="div"
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Grid>
        <Grid item xs={8} sm={3} md={3}>
          {!loading2 ? (
            <Country tempSymbol={tempSymbol} cities={cities2} id={id[1]} />
          ) : (
            <Box
              component="div"
              style={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress color="secondary" />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
