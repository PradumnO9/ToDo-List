import React, { createContext } from "react";
import MainContainer from "./components/MainContainer";
import useTasks from "./constants/useTasks";
import data from "./constants/data.json";
import "./App.css";

export const TasksContext = createContext();

function App() {
  const {
    todoTasks,
    workingTask,
    finishedTask,
    addTask,
    editTask,
    deleteTodoTask,
    moveToWorking,
    moveToFinished,
    deleteFinishedTasks
  } = useTasks(data);

  return (
    <div className="App">
      <h1 className="text-center font-bold text-2xl my-3">To-do list</h1>
      <TasksContext.Provider
        value={{
          todoTasks,
          workingTask,
          finishedTask,
          addTask,
          editTask,
          deleteTodoTask,
          moveToWorking,
          moveToFinished,
          deleteFinishedTasks
        }}
      >
        <MainContainer />
      </TasksContext.Provider>
    </div>
  );
}

export default App;
