import React, { useState } from "react";
// import "./App.css";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingTask(tasks[index].text);
  };

  const saveEditing = (index) => {
    if (editingTask.trim() !== "") {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: editingTask } : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditingTask("");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 hover:animate-spin">ToDo Todo</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded-l-lg focus:outline-none"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks"
        className="border p-2 rounded-lg mb-4 w-full max-w-md focus:outline-none"
      />
      <button className="border border-black mx-2 px-10 rounded-xl bg-white" onClick={() => navigate("/")}>back Home</button>
      <ul className="w-full max-w-md">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center mb-2 p-2 bg-white rounded-lg shadow animate__animated animate__fadeIn"
          >
            {editingIndex === index ? (
              <div className="flex w-full">
                <input
                  type="text"
                  value={editingTask}
                  onChange={(e) => setEditingTask(e.target.value)}
                  className="border p-2 flex-grow rounded-l-lg focus:outline-none"
                />
                <button
                  onClick={() => saveEditing(index)}
                  className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600 focus:outline-none"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex w-full items-center">
                <span
                  className={`flex-grow p-2 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => startEditing(index)}
                  className="bg-yellow-500 text-white p-2 mx-1 rounded-lg hover:bg-yellow-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white p-2 mx-1 rounded-lg hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className={`p-2 mx-1 rounded-lg focus:outline-none ${
                    task.completed
                      ? "bg-gray-500 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
