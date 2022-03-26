const defineInitialState = (key) => {
  const storedTasks = localStorage.getItem(key);
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

  return storedTasks ? JSON.parse(storedTasks) : dummyTasks;
};

export default defineInitialState;
