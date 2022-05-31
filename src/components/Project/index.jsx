import { createContext, useCallback, useEffect, useState } from "react";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";
export const TaskContext = createContext();
export const Project = () => {
  const [Tasks, SetTasks] = useState([]);
  const [queryObject, setQueryObject] = useState({});
  const generateQuery = (filterObject) => {
    // [['sort','created_at'] ,['search','barev']]]
    return Object.entries(filterObject).reduce((query, [field, value]) => {
      query += `${field}=${value}&`;
      return query;
    }, "");
  };
  useEffect(() => {
    const query = generateQuery(queryObject);
    console.log(queryObject);
    fetch(`http://localhost:3001/task${query ? `?${query}` : ""}`)
      .then((res) => res.json())
      .then((task) => SetTasks(task));
  }, [queryObject]);
  const setFilteredField = useCallback((filterEntries) => {
    const [name, value] = filterEntries;
    console.log(filterEntries);
    setQueryObject((prev) => {
      if (!value) {
        const newQueryObject = { ...prev };
        delete newQueryObject[name];
        return newQueryObject;
      }
      if (prev[name] !== value) {
        return {
          ...prev,
          [name]: value,
        };
      }
      return prev;
    }, []);
  });
  return (
    <div className="project-layout">
      <TaskContext.Provider value={{ SetTasks, setFilteredField }}>
        <FilterSection setFilteredField={setFilteredField} />
        <MainSection Tasks={Tasks} SetTasks={SetTasks} />
      </TaskContext.Provider>
    </div>
  );
};
