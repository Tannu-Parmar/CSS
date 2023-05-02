import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("./data.json").then((e) => setData(e.data));
  }, []);
  return <Table data={data} />;
};

export default App;
