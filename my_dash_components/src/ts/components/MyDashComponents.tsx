import React, { useEffect, useRef } from "react";
import { DashComponentProps } from "../props";
import { scatterplot } from "./scatterplot";

type Props = {
  // Insert props
} & DashComponentProps;

/**
 * Component description
 */
const MyDashComponents:React.FC<Props> = ({id, data}) => {
  const element = useRef();

  useEffect(() => {
    scatterplot(data, element.current);
  });

  return <div id={id} ref={element}></div>;
};

MyDashComponents.defaultProps = {};

export default MyDashComponents;
