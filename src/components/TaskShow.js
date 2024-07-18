import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import tasksContext from "../context/task";

function TaskShow({ taski }) {
  const { deleteTaskById, editTaskById } = useContext(tasksContext);

  const [showEdit, setshowEdit] = useState(false);

  const handleDelete = () => {
    // onDelete(taski.id);
    deleteTaskById(taski.id);
  };

  const handleEdit = () => {
    setshowEdit(true);
  };

  const handleSubmit = (id, updatedtitle, updatedtaskDesc) => {
    setshowEdit(false);
    // onUpdate(id, updatedtitle, updatedtaskDesc);
    editTaskById(id, updatedtitle, updatedtaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate
          task={taski}
          taskFormUpdate={true}
          onUpdate={handleSubmit}
        />
      ) : (
        <div className="task-show-content">
          <div >
            <h3 className="is-underlined">Göreviniz:</h3>
            <p>{taski.title}</p>
            <h3 className="is-underlined">Yapılacaklar:</h3>
            <p>{taski.taskDesc}</p>
          </div>
          <div>
            <button className="task-delete" onClick={handleDelete}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEdit}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
