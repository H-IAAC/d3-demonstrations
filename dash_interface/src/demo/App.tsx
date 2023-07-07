import React, { Component, useEffect, useState } from "react";
import * as d3 from "d3";
// @ts-ignore
import tsvData from "./data.tsv";
import ScatterplotComponent from "../ts/components/ScatterplotComponent";
import LinearplotComponent from "../ts/components/LinearplotComponent";

const App = () => {
  // return runScatterplot()
  return runLinearplot();
};

const runLinearplot = () => {
  const data = [
    { x_axis: 2, y_axis: 3 },
    { x_axis: 3, y_axis: 4 },
    { x_axis: 4, y_axis: 5 },
    { x_axis: 5, y_axis: 7 },
    { x_axis: 6, y_axis: 4 },
  ];

  return (
    <div>
      <LinearplotComponent
        id="component"
        data={data}
        x_axis="x_axis"
        y_axis="y_axis"
        xStart={0}
      ></LinearplotComponent>
    </div>
  );
};

const runScatterplot = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.tsv(tsvData).then((d) => {
      setData(d);
    });
  }, []);

  function handleButton() {
    const newData = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < 10; i++) {
      newData.pop();
    }
    setData(newData);
  }

  return (
    <div>
      <h1>Web Application</h1>
      {data !== null && <ScatterplotComponent id="component" data={data} />}
      <button onClick={handleButton}>Button</button>
    </div>
  );
};

export default App;
