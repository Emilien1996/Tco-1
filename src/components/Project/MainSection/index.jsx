import { createContext, useEffect, useState } from "react";
import { Body } from "./Body";
import { Head } from "./Head";
import "./styles.css";
export const TaskContext = createContext();
export const MainSection = () => {
  const [Tasks, SetTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/task")
      .then((res) => res.json())
      .then((task) => SetTasks(task));
  }, []);
  return (
    <div className="main-section">
      <TaskContext.Provider value={{ SetTasks }}>
        <Head />
        <Body data={Tasks} setData={SetTasks} />
      </TaskContext.Provider>
    </div>
  );
};
