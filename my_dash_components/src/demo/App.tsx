import React, { Component, useEffect, useState } from "react";
import * as d3 from "d3";
// @ts-ignore
import tsvData from "./data.tsv";
import MyDashComponents from "../ts/components/MyDashComponents";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.tsv(tsvData).then((d) => {
      setData(d);
    });
  }, []);

  function handleButton() {
    const newData = JSON.parse(JSON.stringify(data))
    for (let i = 0; i < 10; i++) {
      newData.pop();
    }
    setData(newData);
  }

  return (
    <div>
      <h1>Web Application</h1>
      {data !== null && (
        <MyDashComponents id="component" data={data} />
      )}
      <button onClick={handleButton}>Button</button>
    </div>
  );
};

export default App;
