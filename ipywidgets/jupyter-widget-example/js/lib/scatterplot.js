var d3 = require("d3");
window.d3 = d3;
require("./scatterplot.css");

// constant for svg
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
var xScale, yScale;

function create(that) {
  console.log("start create");

  // intialize the html
  that.el.setAttribute("class", "d3-scatterplot");
  that.el.innerHTML = `
        <div id="my_dataviz">
            <svg class="scatterplot-svg"></svg>
        </div>
    `;
  window.dom = that.el;
  render(that);
}

function render(that) {
  console.log("start render");
  var svgElmt = that.el.getElementsByClassName("scatterplot-svg")[0];

  d3.select(svgElmt).selectAll("*").remove();

  var margin = { top: 20, right: 20, bottom: 30, left: 40 },
    // ****    width = 960 - margin.left - margin.right, ****
    // ****    height = 500 - margin.top - margin.bottom; ****
    width = 720 - margin.left - margin.right,
    height = 375 - margin.top - margin.bottom;

  var x = d3.scaleLinear().range([0, width]);

  var y = d3.scaleLinear().range([height, 0]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var xAxis = d3.axisBottom(x);

  var yAxis = d3.axisLeft(y);

  svgElmt.setAttribute("width", width + margin.left + margin.right);
  svgElmt.setAttribute("height", height + margin.top + margin.bottom);

  var svg = d3
    .select(svgElmt)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var data = that.model.get("value");

  data.forEach(function (d) {
    d.sepalLength = +d.sepalLength;
    d.sepalWidth = +d.sepalWidth;
  });

  x.domain(
    d3.extent(data, function (d) {
      return d.sepalWidth;
    })
  ).nice();
  y.domain(
    d3.extent(data, function (d) {
      return d.sepalLength;
    })
  ).nice();

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("text-anchor", "end")
    .text("Sepal Width (cm)");

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Sepal Length (cm)");

  svg
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", 3.5)
    .attr("cx", function (d) {
      return x(d.sepalWidth);
    })
    .attr("cy", function (d) {
      return y(d.sepalLength);
    })
    .style("fill", function (d) {
      return color(d.species);
    });

  var legend = svg
    .selectAll(".legend")
    .data(color.domain())
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", function (d, i) {
      return "translate(0," + i * 20 + ")";
    });

  legend
    .append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  legend
    .append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "end")
    .text(function (d) {
      return d;
    });
}

var view = {
  create: create,
};

module.exports = view;
