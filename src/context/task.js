import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const tasksContext = createContext();
function Provider({ children }) {
  const [tasks, settasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      title: title,
      taskDesc: taskDesc,
    });
    const createdTask = [...tasks, response.data];
    settasks(createdTask); // artık bilgiler created taskda,settaskla güncelledik
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    settasks(response.data);
  };
  const deleteTaskById = async (id) => {
    //debugger;
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    settasks(afterDeletingTask);
  };
  const editTaskById = async (id, updatedtitle, updatedtaskDesc) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      title: updatedtitle,
      taskDesc: updatedtaskDesc,
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: updatedtitle, taskDesc: updatedtaskDesc };
      }
      return task;
    });
    settasks(updatedTask);
  };
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };
  return (
    <tasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </tasksContext.Provider>
  );
}
export { Provider };
export default tasksContext;
