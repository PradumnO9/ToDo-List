import CurrentTask from "./CurrentTask";

const TaskList = ({ list }) => {

  // console.log(list)

  return (
    <div className="mx-2 my-4">
      {list?.map((d) => {
        return (
          <CurrentTask key={d.id} text={d.text} status={d.status} taskId={d.id} />
        );
      })}
    </div>
  );
};

export default TaskList;
