import React from "react";
import useData from "../useData";

const Shopping = () => {
  const { data } = useData();
  return <div>{data}</div>;
};

export default Shopping;
