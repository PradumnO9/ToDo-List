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
      updatedTasks.list.forEach((task) => {
        if (task.id === taskId) {
          updatedTasks.list.splice(updatedTasks.list.taskId, 1);
        }
      });
      return updatedTasks;
    });
  };

  return {
    todoTasks,
    workingTask,
    finishedTask,
    addTask,
    editTask,
    deleteTodoTask,
  };
};

export default useTasks;
