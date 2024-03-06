import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(identifier, newValue) {
      setUserInput(prevValues => {
          return {
              ...prevValues,
              [identifier]: +newValue
          };
      })
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!isValidInput && <p className="center">Please enter a valid Duration</p>}
      {isValidInput && <Results input={userInput} />}
    </>
  )
}

export default App
