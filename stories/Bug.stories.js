import React from "react";
import { Comp } from "./Comp";

export default {
  title: "Bug",
};

export const BugTest = () => {
  return <Comp>{Comp.extra.someNumber}</Comp>;
};
