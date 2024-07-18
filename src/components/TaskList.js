import TaskShow from "./TaskShow";
import { useContext } from "react";
import tasksContext from "../context/task";

function TaskList() {
  const { tasks } = useContext(tasksContext);
  return (
    <div className="task-list">
      {tasks.map((taski, index) => {
        return <TaskShow key={index} taski={taski} />;
      })}
    </div>
  );
}
export default TaskList;
