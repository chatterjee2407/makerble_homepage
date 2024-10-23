import React, { useState } from "react";

export default function TaskList() {
  // Sample tasks
  const tasks = [
    { id: 1, title: "Finish React project", completed: false },
    { id: 2, title: "Update portfolio", completed: false },
    { id: 3, title: "Respond to emails", completed: false },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 border rounded-lg ${
              task.completed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span className={task.completed ? "line-through" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
