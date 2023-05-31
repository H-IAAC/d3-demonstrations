var bogoSVG = d3
  .select("#bogo_animation")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

bogoSVG
  .append("circle")
  .style("stroke", "gray")
  .style("fill", "cyan")
  .attr("r", 130)
  .attr("cx", 150)
  .attr("cy", 150)
  .transition()
  .delay(1000)
  .duration(10000)
  .attr("r", 10)
  .attr("cx", 150)
  .style("fill", "blue");
