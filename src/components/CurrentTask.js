import { useContext, useState } from "react";
import { FcOk } from "react-icons/fc";
import { SlActionRedo } from "react-icons/sl";
import { TasksContext } from "../App";
import { RxCross2 } from "react-icons/rx";
import EditTask from "./EditTask";

const CurrentTask = ({ text, status, taskId }) => {
  const [editToggle, setEditToggle] = useState(false);
  const { deleteTodoTask, moveToWorking, moveToFinished, deleteFinishedTasks } =
    useContext(TasksContext);

  const handleEditButton = () => {
    setEditToggle(!editToggle);
  };
  return (
    <div>
      <div className="bg-slate-200 p-2 rounded-lg my-2 ">
        <p className="ml-2">{text}</p>
        <div className="mt-3 text-white">
          {status === "todo" && (
            <div>
              {editToggle ? (
                <button
                  className="text-red-500"
                  onClick={() => {
                    setEditToggle(false);
                  }}
                >
                  cancel
                </button>
              ) : (
                <div>
                  <button
                    className="bg-blue-400 px-2 py-1 rounded-md hover:bg-opacity-80"
                    onClick={handleEditButton}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 ml-2 rounded-md hover:bg-opacity-80"
                    onClick={(e) => deleteTodoTask(e, taskId)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-red-400 px-2 py-1 ml-2 rounded-md hover:bg-opacity-80"
                    onClick={(e) => moveToWorking(e, taskId)}
                  >
                    <p className="flex items-center justify-between">
                      Working <SlActionRedo size={17} className="ml-1" />
                    </p>
                  </button>
                </div>
              )}
            </div>
          )}
          {status === "working" && (
            <button
              className="bg-yellow-500 px-2 py-1 rounded-md hover:bg-opacity-80"
              onClick={(e) => moveToFinished(e, taskId)}
            >
              <p className="flex items-center justify-between">
                Move To Finished <SlActionRedo size={17} className="ml-1" />
              </p>
            </button>
          )}
          {status === "finished" && (
            <div className="flex justify-between items-center">
              <FcOk color="black" size={25} />
              <RxCross2 className="cursor-pointer" color="red" size={27} onClick={() => deleteFinishedTasks(taskId)} />
            </div>
          )}
        </div>
      </div>
      {status === "todo" && editToggle && (
        <EditTask taskId={taskId} setEditToggle={setEditToggle} />
      )}
    </div>
  );
};

export default CurrentTask;
