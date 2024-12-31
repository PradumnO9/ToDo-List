import CurrentTask from "./CurrentTask";

const TaskList = ({ list }) => {

  return (
    <div className="mx-2 my-4">
      {list?.map((d) => {
        return (
          <CurrentTask key={d.id} text={d.text} status={d.status} />
        );
      })}
    </div>
  );
};

export default TaskList;
