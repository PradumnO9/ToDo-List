const TaskList = ({ list }) => {
  return (
    <div className="mx-2 my-4">
      {list?.map((d) => {
        return (
          <div key={d?.id} className="bg-slate-200 p-2 rounded-lg my-2">
            <p className="ml-2">{d.text}</p>
            <div className="mt-3 text-white">
              {d?.status === "todo" && (
                <div>
                  <button className="bg-orange-400 px-2 py-1 rounded-md hover:bg-opacity-80">
                    Edit
                  </button>
                  <button className="bg-red-400 px-2 py-1 ml-2 rounded-md hover:bg-opacity-80">
                    Move To Working
                  </button>
                </div>
              )}
              {d?.status === "working" && (
                <button className="bg-green-500 px-2 py-1 rounded-md hover:bg-opacity-80">
                  Move To Finished
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
