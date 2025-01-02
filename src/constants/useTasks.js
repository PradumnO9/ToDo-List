import { useState } from "react";

const useTasks = (data) => {
  const [todoTasks, setTodoTasks] = useState(data["todo-tasks"]);
  const [workingTask, setWorkingTasks] = useState(data["working-tasks"]);
  const [finishedTask, setFinishedTasks] = useState(data["finished-tasks"]);

  const addTask = (e, newText) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: newText,
      status: "todo",
    };
    setTodoTasks((prevTask) => {
      const updatedTasks = { ...prevTask };
      updatedTasks.list.push(newTask);
      return updatedTasks;
    });
  };

  const editTask = (e, newText, taskId) => {
    e.preventDefault();
    setTodoTasks((prevTask) => {
      const updatedTasks = { ...prevTask };
      updatedTasks.list.forEach((task) => {
        if (task.id === taskId) {
          task.text = newText;
        }
      });
      return updatedTasks;
    });
  };

  const deleteTodoTask = (e, taskId) => {
    e.preventDefault();
    setTodoTasks((prevTask) => {
      const updatedTasks = { ...prevTask };
      const newArr = updatedTasks.list.filter((task) => task.id !== taskId);
      updatedTasks.list = newArr;
      return updatedTasks;
    });
  };

  const moveToWorking = (e, taskId) => {
    e.preventDefault();
    let taskObj = todoTasks.list.filter((t) => t.id === taskId);
    taskObj[0].status = "working";
    console.log(taskObj[0]);
    setTodoTasks((prevTask) => {
      const updatedTasks = { ...prevTask };
      console.log(updatedTasks);
      const newArr = updatedTasks.list.filter((task) => task.id !== taskId);
      updatedTasks.list = newArr;
      return updatedTasks;
    });
    setWorkingTasks((prevWorkingTask) => {
      const updatedWorkingTasks = { ...prevWorkingTask };
      updatedWorkingTasks.list.push(taskObj[0]);
      return updatedWorkingTasks;
    });
  };

  const moveToFinished = (e, taskId) => {
    e.preventDefault();
    let taskObj = workingTask.list.filter((t) => t.id === taskId);
    taskObj[0].status = "finished";
    setWorkingTasks((prevWorkingTask) => {
      const updatedTasks = { ...prevWorkingTask };
      console.log(updatedTasks);
      const newArr = updatedTasks.list.filter((task) => task.id !== taskId);
      updatedTasks.list = newArr;
      return updatedTasks;
    });
    setFinishedTasks((prevFinishedTask) => {
      const updatedWorkingTasks = { ...prevFinishedTask };
      updatedWorkingTasks.list.push(taskObj[0]);
      return updatedWorkingTasks;
    });
  };

  return {
    todoTasks,
    workingTask,
    finishedTask,
    addTask,
    editTask,
    deleteTodoTask,
    moveToWorking,
    moveToFinished,
  };
};

export default useTasks;
