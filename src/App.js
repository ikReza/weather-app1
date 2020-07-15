import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";
import "./App.css";
import Info from "./components/Info";

function App() {
  const [cities, setCities] = useState([]);
  let [tempSymbol, setTempSymbol] = useState("F");
  useEffect(() => {
    const url =
      "http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=c2efc4022e0d4e7b80a118feab2ad216";
    axios.get(url).then((res) => {
      console.log(res, res.data.list);
      setCities(res.list);
    });
  }, []);
  return (
    <Box component="main">
      <Info
        tempSymbol={tempSymbol}
        setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
      />
    </Box>
  );
}

export default App;
