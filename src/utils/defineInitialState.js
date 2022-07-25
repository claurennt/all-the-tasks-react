const defineInitialState = (key) => {
  const storedTasks = JSON.parse(localStorage.getItem(key));

  const dummyTasks = [
    {
      taskId: crypto.randomUUID(),
      taskText: "Eat Manakish with Zaatar",
      isChecked: false,
      editing: false,
      created_at: Date.now(),
    },
    {
      taskId: crypto.randomUUID(),
      taskText: "Drink good wine",
      isChecked: false,
      editing: false,
      created_at: Date.now() + 1,
    },
  ];
  // if no items are saved inside the local storage we return the hardcoded dummy tasks and display them on load
  return storedTasks.length ? storedTasks : dummyTasks;
};

export default defineInitialState;
