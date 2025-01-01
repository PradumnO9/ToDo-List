import { useContext, useState } from "react";
import { TasksContext } from "../App";

const EditTask = ({ taskId, setEditToggle }) => {
  const [newText, setNewText] = useState("");
  const { editTask } = useContext(TasksContext);

  const editTaskButton = (e) => {
    setEditToggle(false);
    editTask(e, newText, taskId);
  };

  return (
    <div>
      <form className="flex items-center w-full my-2 mx-3">
        <input
          className="ml-2 px-3 py-1 rounded-l-lg border-2 border-s-gray-300"
          type="text"
          value={newText}
          placeholder="type..."
          onChange={(e) => setNewText(e.target.value)}
        />
        <button
          className="px-3 py-1 rounded-r-lg bg-blue-400 text-white text-lg font-bold hover:opacity-85"
          onClick={editTaskButton}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditTask;
