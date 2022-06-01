import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Greet ${props.name}. There are ${props.messageCount} unread messages.`
        : "Welcome guest"}
    </div>
  );
};
