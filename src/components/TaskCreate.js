import { useState } from "react";
import { useContext } from "react";
import tasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate,onUpdate }) {
  const { createTask, editTaskById } = useContext(tasksContext);

  const [title, settitle] = useState(task ? task.title : "");
  const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    settitle(event.target.value); 
  };
  const handleTaskChange = (Event) => {
    settaskDesc(Event.target.value);
  };
  const handleSunmit = (event) => {
    event.preventDefault(); //butona tıklandığında sayfaya reflesh atmasın diye
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    settitle("");
    settaskDesc(""); //butona tıklandığında yeni bilgi için içerisini boşaltsın diye
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3 className="is-underlined">Lütfen Görevi Düzenleyiniz!</h3>
          <form className="task-form2">
            <label htmlFor="">Başlığı Düzenleyiniz:</label>
            <input value={title} onChange={handleChange} type="text" />
            <label htmlFor="">Görevi Düzenleyiniz:</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button onClick={handleSunmit}>Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <p className="is-underlined is-size-4">Lütfen Görev Ekleyiniz!</p>
          <form className="task-form">
            <label htmlFor="">Başlık:</label>
            <input value={title} onChange={handleChange} type="text" placeholder="Başlık Giriniz!"/>
            <label htmlFor="">Görev:</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} placeholder="Görev Giriniz!"/>
            <button onClick={handleSunmit}>Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default TaskCreate;
