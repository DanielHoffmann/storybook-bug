import React from "react";

export default function Comp({ children }) {
  return <div>{children}</div>;
}

Comp.extra = {
  someNumber: 10,
};
