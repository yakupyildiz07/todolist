import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext, useState } from "react";
import tasksContext from "./context/task";
import BgSelecter from "./components/BgSelecter";
import "bulma/css/bulma.min.css";
function App() {
  // debugger;
  const [color, setcolor] = useState("");
  const changer = (e) => {
    setcolor(e.target.style.backgroundColor);
  };
  const { fetchTasks } = useContext(tasksContext);
  useEffect(() => {
    fetchTasks();
  }, [color]);

  return (
    <div className="App"  style={{ backgroundColor: `${color}` }}>
      <TaskCreate />
      <p className="is-size-3 is-underlined">Görevler:</p>
      <TaskList />
      <BgSelecter changeri={changer} />
    </div>
  );
}

export default App;
