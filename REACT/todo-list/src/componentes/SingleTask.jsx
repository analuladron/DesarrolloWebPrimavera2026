function SingleTask({ task, onToggle }) {
  return (
    <div className={`task-item ${task.estaCompletada ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.estaCompletada}
        onChange={() => onToggle(task.id)}
      />

      <span
        className="task-text"
        style={{ backgroundColor: task.colorFondo }}
      >
        {task.texto}
      </span>
    </div>
  );
}

export default SingleTask;