import { useState } from "react";
import data from '../constants/data.json';
import Task from "./Task";

const MainContainer = () => {

    const [tasks, setTasks] = useState(data["todo-tasks"]);
    const [workingTask, setWorkingTasks] = useState(data["working-tasks"]);
    const [finishedTask, setFinishedTasks] = useState(data["finished-tasks"]);

  return (
    <div>
      <form className="flex items-center w-full my-2 mx-3">
        <input
          className="ml-2 px-3 py-1 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          placeholder="type..."
        />
        <button className="px-3 py-1 rounded-r-lg bg-green-600 text-white text-lg font-bold hover:opacity-85">
          Add Task
        </button>
      </form>

      <div className="flex">
        
        <Task list={tasks.list} title={tasks.title} />
        <Task list={workingTask.list} title={workingTask.title} />
        <Task list={finishedTask.list} title={finishedTask.title} />
      </div>
    </div>
  );
};

export default MainContainer;
