import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@material-ui/core";
import "./App.css";
import Info from "./components/Info";
import Country from "./components/Country";

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  let [tempSymbol, setTempSymbol] = useState("F");
  useEffect(() => {
    setLoading(true);
    const url =
      "http://api.openweathermap.org/data/2.5/group?id=1185241,524901&units=imperial&appid=c2efc4022e0d4e7b80a118feab2ad216";
    axios.get(url).then((res) => {
      setLoading(false);
      console.log(res, res.data.list[0].weather);
      setCities(res.data.list);
    });
  }, []);
  return (
    <Box component="main">
      <Grid container justify="center" spacing={2} style={{ height: "80vh" }}>
        <Grid item xs={9} sm={5} md={5}>
          <Info
            tempSymbol={tempSymbol}
            setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
          />
        </Grid>
        <Grid item xs={5} sm={3} md={3}>
          {!loading && <Country cities={cities[0]} tempSymbol={tempSymbol} />}
        </Grid>
        <Grid item xs={5} sm={3} md={3}>
          {!loading && <Country cities={cities[1]} tempSymbol={tempSymbol} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
