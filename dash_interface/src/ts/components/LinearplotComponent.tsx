import React, { useEffect, useRef } from "react";
import { DashComponentProps } from "../props";
import { linearplot } from "../graphs/linearplot";

type Props = {
  x_axis: string;
  y_axis: string;
  xStart?: Number;
  xEnd?: Number;
} & DashComponentProps;

/**
 * Component description
 */
const LinearplotComponent: React.FC<Props> = ({
  id,
  data,
  x_axis,
  y_axis,
  xStart,
  xEnd,
}) => {
  const element = useRef();

  useEffect(() => {
    linearplot(data, element.current, x_axis, y_axis, xStart, xEnd);
  });

  return <div id={id} ref={element}></div>;
};

LinearplotComponent.defaultProps = {};

export default LinearplotComponent;
