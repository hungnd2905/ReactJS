import React, { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const clickEventHandler = () => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: "abc" };
    });

    console.log(userInput);
  };
  return (
    <div>
      <button onClick={clickEventHandler}>CLICKHERE</button>
    </div>
  );
}

export default App;
