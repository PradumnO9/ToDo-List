import { useState } from "react";
import data from "../constants/data.json";
import Tasks from "./Tasks";

const MainContainer = () => {
  const [todoTasks, setTodoTasks] = useState(data["todo-tasks"]);
  const [workingTask, setWorkingTasks] = useState(data["working-tasks"]);
  const [finishedTask, setFinishedTasks] = useState(data["finished-tasks"]);

  console.log(todoTasks)

  const [newText, setNewText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: newText,
      status: "todo"
    }
    setTodoTasks((prevTask) => {
      const updatedTasks = {...prevTask}
      updatedTasks.list.push(newTask) 
      return updatedTasks;
    }) 
  }

  return (
    <div>
      <form className="flex items-center w-full my-2 mx-3">
        <input
          className="ml-2 px-3 py-1 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={newText}
          placeholder="type..."
          onChange={(e) => {setNewText(e.target.value)}}
        />
        <button className="px-3 py-1 rounded-r-lg bg-green-600 text-white text-lg font-bold hover:opacity-85" onClick={addTask}>
          Add Task
        </button>
      </form>

      <div className="flex">
        {/* {Object.values(taskData).map((data => {
          console.log(data)
          return <div>
            <Tasks key={data.id} list={data.list} title={data.title} />
          </div>
        }))} */}

        <Tasks list={todoTasks.list} title={todoTasks.title} />
        <Tasks list={workingTask.list} title={workingTask.title} />
        <Tasks list={finishedTask.list} title={finishedTask.title} />
      </div>
    </div>
  );
};

export default MainContainer;
