import { scatterplot } from "./scatterplot.js";

async function run() {
  var data = await d3.tsv("data.tsv");
  var min = d3.min(data, (d) => d.petalLength);
  var max = d3.max(data, (d) => d.petalLength);
  var slider = d3.select("#petal-length-slider");
  
  slider.attr("min", min).attr("max", max).attr("step", 0.1).attr("value", max);
  slider.on("change", (d) => {
    var values = data.filter(l => l.petalLength <= d.target.value)
    updatePlot(values);
  })

  scatterplot(data, "#graph");
}

function updatePlot(values) {
  d3.select("#graph").selectAll('*').remove()
  scatterplot(values, "#graph");
}

run();
