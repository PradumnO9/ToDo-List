import { useState } from "react";
import { FcOk } from "react-icons/fc";
import EditTask from "./EditTask";

const CurrentTask = ({ text, status }) => {
  const [editToggle, setEditToggle] = useState(false);
  const handleEditButton = () => {
    setEditToggle(!editToggle);
  };
  return (
    <div>
      <div
        className={
          "bg-slate-200 p-2 rounded-lg my-2 " +
          (status === "finished" && "flex justify-between items-center")
        }
      >
        <p className="ml-2">{text}</p>
        <div className="mt-3 text-white">
          {status === "todo" && (
            <div>
              <button
                className="bg-blue-400 px-2 py-1 rounded-md hover:bg-opacity-80"
                onClick={handleEditButton}
              >
                Edit
              </button>
              <button className="bg-red-400 px-2 py-1 ml-2 rounded-md hover:bg-opacity-80">
                Move To Working
              </button>
            </div>
          )}
          {status === "working" && (
            <button className="bg-yellow-500 px-2 py-1 rounded-md hover:bg-opacity-80">
              Move To Finished
            </button>
          )}
          {status === "finished" && <FcOk color="black" size={25} />}
        </div>
      </div>
      {status === "todo" && editToggle && <EditTask />}
    </div>
  );
};

export default CurrentTask;
