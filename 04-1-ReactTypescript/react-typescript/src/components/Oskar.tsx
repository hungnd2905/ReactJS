import React from "react";

type OskarProps = {
  children: React.ReactNode;
};
export const Oskar = (props: OskarProps) => {
  return <div>{props.children}</div>;
};
