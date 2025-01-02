import { useContext, useState } from "react";
import Tasks from "./Tasks";
import { TasksContext } from "../App";

const MainContainer = () => {
  const [newText, setNewText] = useState("");

  const { todoTasks, workingTask, finishedTask, addTask } =
    useContext(TasksContext);

  return (
    <div>
      <form className="flex items-center w-full my-2 mx-3">
        <input
          className="ml-2 px-3 py-1 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={newText}
          placeholder="type..."
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
        <button
          className="px-3 py-1 rounded-r-lg bg-green-600 text-white text-lg font-bold hover:opacity-85"
          onClick={(e) => addTask(e, newText)}
        >
          Add Task
        </button>
      </form>

      <div className="md:flex">
        <Tasks list={todoTasks.list} title={todoTasks.title} />
        <Tasks list={workingTask.list} title={workingTask.title} />
        <Tasks list={finishedTask.list} title={finishedTask.title} />
      </div>
    </div>
  );
};

export default MainContainer;
