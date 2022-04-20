import React, { useState } from "react";
import Task from "./components/task/index.tsx";

import "./App.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  const [base, setBase] = useState({
    id: 0,
    title: "",
    isComplete: false,
  });

  const handleTasks = {
    AddTask: () => {
      if (base.title.length > 0) {
        setTasks([...tasks, { ...base, id: base.id }]);
        setBase({ ...base, id: base.id + 1, title: "" });
      }
    },
    HandleBase: (e) => {
      setBase({
        id: base.id,
        title: e.target.value,
        isComplete: false,
      });
    },
    HandleCheckBox: (data) => {
      setTasks(
        tasks.map((task) => {
          if (task && task.id === data.id) {
            task.isComplete = !task.isComplete;
          }
          return task;
        })
      );
    },
    HandleRemove: (data) => {
      setTasks(
        tasks.map((task) => {
          if (task && task.id !== data.id) {
            return task;
          }
        })
      );
    },
  };

  return (
    <div className="full">
      <h1 className="tdText">
        to.<span>DO</span>
      </h1>
      <div className="container">
        <div className="taskContainer">
          <h2>Minhas Tasks</h2>
          <div className="addTaskContainer">
            <input
              className="input"
              value={base.title}
              onChange={(e) => handleTasks.HandleBase(e)}
              placeholder="Adicionar novo todo"
              type="text"
            />
            <button className="addBtn" onClick={handleTasks.AddTask}>
              Add
            </button>
          </div>
        </div>
        {tasks.map((task) => (
          <>
            {task && (
              <Task
                key={task.id}
                data={task}
                check={handleTasks.HandleCheckBox}
                remove={handleTasks.HandleRemove}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
