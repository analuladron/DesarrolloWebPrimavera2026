import { useState } from "react";
import SingleTask from "./SingleTask";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, texto: "Clean my room", colorFondo: "#d98c00", estaCompletada: false },
    { id: 2, texto: "Decluttering my study room", colorFondo: "#f7b24d", estaCompletada: false },
    { id: 3, texto: "Buy some new stationary", colorFondo: "#f39c12", estaCompletada: false },
    { id: 4, texto: "Spa pedicure and manicure", colorFondo: "#ffb347", estaCompletada: false },
    { id: 5, texto: "Playing basketball with friends", colorFondo: "#c98b2c", estaCompletada: false },
    { id: 6, texto: "Reduce fast food", colorFondo: "#d6a13d", estaCompletada: false },
    { id: 7, texto: "Buy skincare", colorFondo: "#f39c12", estaCompletada: false },
  ]);

  function completarTarea(id) {
    const nuevasTareas = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          estaCompletada: !task.estaCompletada,
        };
      }
      return task;
    });

    setTasks(nuevasTareas);
  }

  return (
    <div className="todo-card">
      <h1>To Do List</h1>
      <p className="subtitle">Checklist</p>

      <div className="tasks-container">
        {tasks.map((task) => (
          <SingleTask
            key={task.id}
            task={task}
            onToggle={completarTarea}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;