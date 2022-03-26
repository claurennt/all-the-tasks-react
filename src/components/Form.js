import React from "react";

const Form = ({ addNewTask }) => (
  <form className="submitForm" onSubmit={addNewTask}>
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Add task..."
        className="input-task"
        name="newTask"
      />
      <button id="input-button" className="input-button" type="submit">
        +
      </button>
    </div>
  </form>
);

export default Form;
