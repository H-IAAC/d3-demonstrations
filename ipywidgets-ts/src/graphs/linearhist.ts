import * as d3 from 'd3';

export function linearhist(
  that: any,
  pdpData: any[],
  histData: any[],
  element: HTMLElement,
  x_axis: string,
  y_axis: string,
  histValue: string,
  setValue?: (arg0: string, that: any) => void
) {
  d3.select(element).selectAll('*').remove();

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 720 - margin.left - margin.right;
  const height = 375 - margin.top - margin.bottom;
  const heightHist = 80 - margin.top - margin.bottom;

  const xMin = Math.min(
    <number>d3.min(pdpData, (d) => d[x_axis]),
    <number>d3.min(histData, (d) => d[histValue])
  );
  const xMax = Math.max(
    <number>d3.max(pdpData, (d) => d[x_axis]),
    <number>d3.max(histData, (d) => d[histValue])
  );

  const x = d3.scaleLinear().range([0, width]);

  const y = d3.scaleLinear().range([height, 0]);
  const yHist = d3.scaleLinear().range([heightHist, 0]);

  const xAxis = d3.axisBottom(x);

  const yAxis = d3.axisLeft(y);

  function mouseover(event: MouseEvent, d: { [x: string]: number }) {
    focus.style('opacity', 1);
    focusText.style('opacity', 1);
    focus.attr('x', event.offsetX - 30).attr('y', event.offsetY - 40);
    focusText
      .html(
        'x:' +
          Math.round(d[x_axis] * 10) / 10 +
          '  -  ' +
          'y:' +
          Math.round(d[y_axis] * 10) / 10
      )
      .attr('x', event.offsetX - 15)
      .attr('y', event.offsetY - 20);
  }

  function mouseout() {
    focus.style('opacity', 0);
    focusText.style('opacity', 0);
  }

  function mouseClick(event: any, d: { [x: string]: number }) {
    const text =
      'x:' +
      Math.round(d[x_axis] * 10) / 10 +
      '  -  ' +
      'y:' +
      Math.round(d[y_axis] * 10) / 10;
    setValue?.(text, that);
  }

  let histValues = <number[]>histData.map((d) => d[histValue]);
  const bins = d3
    .bin()
    .thresholds(20)
    .value((d) => Math.round(d * 10) / 10)(histValues);

  const svg = d3
    .select(element)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  x.domain([xMin, xMax]);
  y.domain(<[number, number]>d3.extent(pdpData, (d) => d[y_axis]));
  yHist.domain(<[number, number]>[0, d3.max(bins, (d) => d.length)]);

  const focus = svg
    .append('g')
    .append('rect')
    .style('fill', 'none')
    .attr('width', 160)
    .attr('height', 40)
    .attr('stroke', '#69b3a2')
    .attr('stroke-width', 4)
    .style('opacity', 0);

  var focusText = svg
    .append('g')
    .append('text')
    .style('opacity', 0)
    .attr('text-anchor', 'left')
    .attr('alignment-baseline', 'middle')
    .html('lkjdslkfjsd');

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
    .append('path')
    .datum(bins)
    .attr('fill', 'paleturquoise')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1)
    .attr(
      'd',
      d3
        .line<any>()
        .x((d) => x((d.x1 + d.x0) / 2))
        .y((d) => yHist(d.length) + height - heightHist)
        .curve(d3.curveCatmullRom)
    );

  let dataPath = pdpData.map(d => [<number> d[x_axis], <number> d[y_axis]])

  svg
    .append('path')
    .datum(dataPath)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-width', 1.5)
    .attr(
      "d",
      d3
        .line<any>()
        .x((d) => x(d[0]))
        .y((d) => y(d[1]))
    );

  svg
    .selectAll('myCircles')
    .data(pdpData)
    .enter()
    .append('circle')
    .attr('fill', 'red')
    .attr('stroke', 'none')
    .attr('cx', (d) => x(d[x_axis]))
    .attr('cy', (d) => y(d[y_axis]))
    .attr('r', 3)
    .on('mouseover', mouseover)
    .on('mouseout', mouseout)
    .on('click', mouseClick);
}
