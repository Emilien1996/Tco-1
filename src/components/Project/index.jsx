import { createContext, useCallback, useEffect, useState } from "react";
import { connect, } from "react-redux";
import { getTaskThunk } from "../../redux/actions/task-actions";
import { FilterSection } from "./FilterSection";
import { MainSection } from "./MainSection";
import "./styles.css";
export const TaskContext = createContext();
export const ConnectedProject = (getTasks) => {
  const [queryObject, setQueryObject] = useState({});
  const user = useSelector((state) => console.log(state));
  const generateQuery = (filterObject) => {
    // [['sort','created_at'] ,['search','barev']]]
    return Object.entries(filterObject).reduce((query, [field, value]) => {
      query += `${field}=${value}&`;
      return query;
    }, "");
  };

  useEffect(() => {
    const query = generateQuery(queryObject);
    getTasks(query);
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
      <TaskContext.Provider value={{ setFilteredField }}>
        <FilterSection setFilteredField={setFilteredField} />
        <MainSection />
      </TaskContext.Provider>
    </div>
  );
};
export const Project = connect(null, {
  getTasks: getTaskThunk,
})(ConnectedProject);
