div = d3
  .select("div")
  .selectAll("p")
  .data([1, 2, 3, 4, 5])
  .enter()
  .append("p")
  .text((d) => d);

setTimeout(() => {
  div2 = div.data([4, 5, 6, 7], (d) => d);
  div2
    .enter()
    .append("p")
    .text((d) => d);

  setTimeout(() => {
    div2.exit().remove();
  }, 5000);
}, 5000);
