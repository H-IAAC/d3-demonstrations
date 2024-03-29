import * as d3 from 'd3';

export function histogramplot(
  data: any[],
  element: HTMLElement,
  value: string,
  xStart?: number,
  xEnd?: number
) {
  d3.select(element).selectAll('*').remove();

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 720 - margin.left - margin.right;
  const height = 375 - margin.top - margin.bottom;

  let xMin = xStart
  if(!xStart) xMin = d3.min(data, (d) => d[value]);

  let xMax = xEnd
  if(!xEnd) xMax = d3.max(data, (d) => d[value]);

  const x = d3.scaleLinear().range([0, width]);

  const y = d3.scaleLinear().range([height, 0]);

  const xAxis = d3.axisBottom(x);

  const yAxis = d3.axisLeft(y);

  let values = <number[]>data.map((d) => d[value]);
  const bins = d3
    .bin()
    .thresholds(40)
    .value((d) => Math.round(d * 10) / 10)(values);

  const svg = d3
    .select(element)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  x.domain([<number> xMin, <number> xMax]);
  y.domain(<[number, number]>[0, d3.max(bins, (d) => d.length)]);

  svg
    .append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis)
    .append('text')
    .attr('x', width)
    .attr('y', -6)
    .style('text-anchor', 'end');

  svg
    .append('g')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end');

  svg
    .append('g')
    .attr('fill', 'steelblue')
    .selectAll()
    .data(<any[]>bins)
    .join('rect')
    .attr('x', (d) => x(d.x0) + 1)
    .attr('width', (d) => x(d.x1) - x(d.x0) - 1)
    .attr('y', (d) => y(d.length))
    .attr('height', (d) => y(0) - y(d.length));
}
