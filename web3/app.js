import { scatterplot } from "./scatterplot.js";

async function run() {
  var data = await d3.tsv("data.tsv");
  scatterplot(data, "body");
}

run();
