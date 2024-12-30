import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <h1 className="text-center font-bold text-2xl my-3">To-do list</h1>
      <MainContainer />
    </div>
  );
}

export default App;
