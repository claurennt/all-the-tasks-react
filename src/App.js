import React, { useState, useEffect } from "react";

import Task from "./components/Task";
import Form from "./components/Form";
import defineInitialState from "./utils/defineInitialState";

import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const initialState = defineInitialState("tasks");

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    //save tasks to local torage on window close
    const saveTasksToLocalStorage = () =>
      localStorage.setItem("tasks", JSON.stringify(tasks));

    window.addEventListener("beforeunload", saveTasksToLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", saveTasksToLocalStorage);
    };
  });

  // function to add tasks
  const addNewTask = (e) => {
    e.preventDefault();

    const taskText = e.target.newTask.value;

    const newtask = {
      taskId: crypto.randomUUID(),
      taskText,
      isChecked: false,
      editing: false,
      created_at: Date.now() + 1,
    };

    setTasks([newtask, ...tasks]);

    e.currentTarget.newTask.value = "";
  };

  //function to toggle taskChecked property of clicked task based on id
  const toggleChecked = (taskId) => {
    const toggledTask = tasks.find((task) => task.taskId === taskId);

    toggledTask.isChecked = !toggledTask.isChecked;

    setTasks([...tasks]);
  };

  // function to delete clicked task
  const deleteTask = (taskId) => {
    // updates state with all filtered tasks but the one we are clicking on(identified by id)
    const filteredtasks = tasks.filter((task) => taskId !== task.taskId);

    setTasks(filteredtasks);
  };

  const editTask = (taskId) => {
    /*shows toast if we click to edit more than one task at a time*/
    if (tasks.filter((task) => task.editing).length)
      return toast.error("You are already editing a task!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

    // find the task we want to edit when we click on the edit button by the id and make it's editing prop to true
    const clickedTask = tasks.find((task) => task.taskId === taskId);

    clickedTask.editing = true;

    setTasks([...tasks]);
  };

  const finishEditTask = (event, taskId) => {
    const clickedTask = tasks.find((task) => task.taskId === taskId);

    clickedTask.editing = false;

    clickedTask.taskText = event.target.innerText;

    setTasks([...tasks]);
  };

  // function to sort the order of the tasks in the list
  const compare = (a, b) => {
    // if (a.created_at > b.created_at) return -1;
    // if (b.created_at > a.created_at) return 1;
    // return 0;
  };

  return (
    <>
      <main className="App">
        <section className="list">
          <h1>All the tasks, aka React Todo List</h1>

          <Form addNewTask={addNewTask} />

          <div className="task-wrapper">
            {tasks.sort(compare).map((task) => (
              <Task
                key={task.taskId}
                {...task}
                toggleChecked={toggleChecked}
                deleteTask={deleteTask}
                editTask={editTask}
                finishEditTask={finishEditTask}
              />
            ))}
          </div>
        </section>
        <ToastContainer />
      </main>

      <footer>Made with love by claurennt</footer>
    </>
  );
};

export default App;
