import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oskar } from "./components/Oskar";

function App() {
  const personName = { first: "Nguyen", last: "Hung" };
  const personList = [
    {
      first: "Nguyen",
      last: "Hoang",
    },
    {
      first: "Nguyen",
      last: "Tuan",
    },
    {
      first: "Tran",
      last: "Khanh",
    },
  ];
  return (
    <div>
      <Greet name="Hung" messageCount={10} isLoggedIn={true}></Greet>
      <Person name={personName} />
      <PersonList names={personList}></PersonList>
      <Status status="loading"></Status>
      <Heading>This is a text.</Heading>
      <Oskar>
        <Heading>Oskar meets Dicaprio</Heading>
      </Oskar>
    </div>
  );
}

export default App;
