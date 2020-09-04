import React from "react";

export function Comp({ children }) {
  return <div>{children}</div>;
}

Comp.extra = {
  someNumber: 10,
};
