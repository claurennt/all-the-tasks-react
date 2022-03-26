const Task = ({
  taskText,
  taskId,
  isChecked,
  toggleChecked,
  editTask,
  deleteTask,
  editing,
  onFinishEditing,
}) => (
  <article className="task">
    <div
      className={`${
        isChecked ? "task-textfield checked-task" : "task-textfield"
      } ${editing && "edit-mode"}`}
      contentEditable={editing}
      suppressContentEditableWarning={true}
      onBlur={(event) => onFinishEditing(event, taskId)}
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
        <i class="bi bi-eraser"></i>
      </button>
      <button
        className="check task-button"
        onClick={() => {
          toggleChecked(taskId);
        }}
      >
        <i class="bi bi-check-lg"></i>
      </button>
      <button
        className="delete task-button"
        onClick={() => {
          deleteTask(taskId);
        }}
      >
        <i class="bi bi-dash"></i>
      </button>
    </div>
  </article>
);
export default Task;
