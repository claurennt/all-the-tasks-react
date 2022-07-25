const Task = ({
  taskText,
  taskId,
  isChecked,
  toggleChecked,
  editTask,
  deleteTask,
  editing,
  finishEditTask,
}) => (
  <article className="task">
    <div
      className={`${
        isChecked ? "task-textfield checked-task" : "task-textfield"
      } ${editing && "edit-mode"}`}
      contentEditable={editing}
      suppressContentEditableWarning={true}
      onBlur={(event) => finishEditTask(event, taskId)}
    >
      {taskText}
    </div>
    <div className="button-wrapper">
      <button
        className="edit task-button"
        onClick={() => {
          editTask(taskId, taskText);
        }}
      >
        <i className="bi bi-eraser"></i>
      </button>
      <button
        className="check task-button"
        onClick={() => {
          toggleChecked(taskId);
        }}
      >
        <i className="bi bi-check-lg"></i>
      </button>
      <button
        className="delete task-button"
        onClick={() => {
          deleteTask(taskId);
        }}
      >
        <i className="bi bi-dash"></i>
      </button>
    </div>
  </article>
);
export default Task;
