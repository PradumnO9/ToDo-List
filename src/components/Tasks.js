import TaskList from "./TaskList";

const Tasks = ({ list, title }) => {

  return (
    <div className="w-[90%] mb-2 md:w-[30%] h-[500px] ml-5 border-2 p-2 rounded-md shadow-md overflow-scroll">
      <h1 className="text-xl m-1">{title}</h1>

      <TaskList list={list} />
    </div>
  );
};

export default Tasks;
