import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const tasksContext = createContext();
function Provider({ children }) {
  const [tasks, settasks] = useState([]);
  const createTask = async (title, taskDesc,body) => {
    // const response = await axios.post("http://localhost:3001/tasks",
    
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts",
       {
      title: title,
      // taskDesc: taskDesc,
      taskDesc:taskDesc,
    });
    console.log(title);
    const createdTask = [...tasks, response.data];
    settasks(createdTask); // artık bilgiler created taskda,settaskla güncelledik
  };
  const fetchTasks = async () => {
    // const response = await axios.get("http://localhost:3001/tasks");
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12");
    settasks(response.data);
  };
  const deleteTaskById = async (id) => {
    //debugger;
    // await axios.delete(`http://localhost:3001/tasks/${id}`);
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const afterDeletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    settasks(afterDeletingTask);
  };
  const editTaskById = async (id, updatedtitle, updatedtaskDesc) => {
    // await axios.put(`http://localhost:3001/tasks/${id}`, {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {

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
